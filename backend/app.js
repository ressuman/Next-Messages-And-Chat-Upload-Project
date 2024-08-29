import express from "express";

const app = express();

app.get("/messages", (req, res) => {
  const requestSource = req.headers["x-id"];
  console.log(
    `${new Date().toISOString()}: EXECUTING /messages on backend from ${requestSource}`
  );
  res.json([
    {
      id: 1,
      text: "Hello World",
    },
    {
      id: 2,
      text: "Another message from the separate backend",
    },
    {
      id: 3,
      text: "Good morning!",
    },
    {
      id: 4,
      text: "Let’s catch up later.",
    },
    {
      id: 5,
      text: "Here’s the document you requested.",
    },
    {
      id: 6,
      text: "Can you join the meeting at 3 PM?",
    },
    {
      id: 7,
      text: "Don’t forget to submit your report by tomorrow.",
    },
  ]);
});

app.listen(8080, () => {
  console.log("Backend server is running on http://localhost:8080");
});
