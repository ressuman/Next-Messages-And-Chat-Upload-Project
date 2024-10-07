import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Dummy messages data
const dummyMessages = [
  {
    text: "Breaking: Global stock markets show significant gains.",
  },
  {
    text: "Tech giants unveil new AI features at the conference.",
  },
  {
    text: "Severe weather warnings issued for several countries.",
  },
  {
    text: "New discovery on Mars raises questions about past life.",
  },
  {
    text: "International sports events draw record-breaking crowds.",
  },
  {
    text: "Leaders convene to discuss climate action initiatives.",
  },
  {
    text: "Scientists develop new cancer treatment with high success rate.",
  },
  {
    text: "Breakthrough in renewable energy technology announced.",
  },
  {
    text: "World economy predicted to grow steadily in the next quarter.",
  },
  {
    text: "Authorities confirm significant drop in global crime rates.",
  },
  {
    text: "SpaceX successfully launches crew to the International Space Station.",
  },
  {
    text: "New AI tools revolutionize healthcare diagnostics.",
  },
  {
    text: "Climate change initiatives gain momentum worldwide.",
  },
  {
    text: "Electric vehicles dominate the auto industry.",
  },
  {
    text: "Sports world unites to combat racism and inequality.",
  },
  {
    text: "Scientists discover new exoplanet in habitable zone.",
  },
  {
    text: "NASA's mission to study distant asteroid is successful",
  },
  {
    text: "Olympics committee debates future locations for 2032 games",
  },
  {
    text: "Countries sign landmark biodiversity conservation agreement",
  },
  {
    text: "Major cybersecurity breach exposes millions of data records",
  },
  {
    text: "Innovative startups showcase sustainable energy solutions",
  },
];

// Function to initialize the database and insert messages
async function initData() {
  try {
    // Fetch all the existing text entries from the "messages" table
    const { data: existingMessages, error: fetchError } = await supabase
      .from("messages")
      .select("text");

    if (fetchError) {
      console.error("Error fetching existing messages:", fetchError);
      return;
    }

    // Extract existing texts into an array
    const existingTexts = existingMessages.map(
      (messageItem) => messageItem.text
    );

    // Filter out the dummyMessages that already exist (matching text)
    const messagesToInsert = dummyMessages.filter(
      (messageItem) => !existingTexts.includes(messageItem.text)
    );

    // If there are any messages left to insert, proceed with the insert
    if (messagesToInsert.length > 0) {
      const { data: insertedData, error: insertError } = await supabase
        .from("messages")
        .insert(messagesToInsert);

      if (insertError) {
        console.error("Error inserting messages:", insertError);
      } else {
        console.log("Messages inserted successfully:", insertedData);
      }
    } else {
      console.log("No new messages to insert. All items already exist.");
    }
  } catch (error) {
    console.error("Error initializing data:", error);
  }
}

// Run the data initialization
initData();
