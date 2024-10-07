import { cache } from "react";
import { createClient } from "@supabase/supabase-js";
//import sql from "better-sqlite3";
import { unstable_cache as nextCache } from "next/cache";

//const db = new sql("messages.db");

// function initDb() {
//   db.exec(`
//     CREATE TABLE IF NOT EXISTS messages (
//       id INTEGER PRIMARY KEY,
//       text TEXT
//     )`);
// }

// initDb();

// export function addMessage(message) {
//   db.prepare("INSERT INTO messages (text) VALUES (?)").run(message);
// }

// export function getMessages() {
//   console.log("Fetching messages from db");
//   return db.prepare("SELECT * FROM messages").all();
// }

// export const getMessages = cache(function getMessages() {
//   console.log("Fetching messages from db");
//   return db.prepare("SELECT * FROM messages").all();
// });

// export const getMessages = nextCache(
//   cache(function getMessages() {
//     console.log("Fetching messages from db");
//     return db.prepare("SELECT * FROM messages").all();
//   }),
//   ["messages"],
//   {
//     tags: ["msg"],
//   }
// );

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Add a new message to the Supabase database
export async function addMessage(message) {
  const { data, error } = await supabase
    .from("messages")
    .insert([{ text: message }]);

  if (error) {
    console.error("Error adding message:", error);
    throw error;
  } else {
    console.log("Message added successfully");
  }
  return data;
}

// Fetch all messages from the Supabase database (with caching)
export const getMessages = nextCache(
  cache(async function getMessages() {
    console.log("Fetching messages from Supabase");
    const { data, error } = await supabase.from("messages").select("*");

    if (error) {
      console.error("Error fetching messages:", error);
      return [];
    }

    return data;
  }),
  ["messages"],
  {
    tags: ["msg"],
  }
);
