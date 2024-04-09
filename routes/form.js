const express = require("express");
const router = express.Router();
const messages = require("./messages"); // Import the messages array

// Define route for "/new"
router.get("/", (req, res) => {
  res.render("form");
});

// Define route for POST request to handle form submission
router.post("/", (req, res) => {
  // Handle form submission here
  const author = req.body.author;
  const message = req.body.message;

  // Process the data (e.g., save it to a database)
  messages.push({ text: message, user: author, added: new Date() });

  // Redirect or send response as per your requirement
  res.redirect("/");
});

// Export the router
module.exports = router;
