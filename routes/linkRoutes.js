const express = require("express");
const router = express.Router();
const Link = require("../models/link");

// Save link to MongoDB
router.post("/add", async (req, res) => {
  try {
    const { url } = req.body;
    const newLink = new Link({ url });
    await newLink.save();
    res.status(201).json({ message: "Link saved successfully", link: newLink });
  } catch (error) {
    res.status(500).json({ error: "Failed to save link" });
  }
});

// Get all saved links
router.get("/all", async (req, res) => {
  try {
    const links = await Link.find().sort({ createdAt: -1 });
    res.json(links);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch links" });
  }
});

module.exports = router;
