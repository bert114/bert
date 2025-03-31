const express = require("express");
const cors = require("cors");
const projects = require("./src/projects.json"); // Ensure this file exists

const app = express();
const PORT = process.env.PORT || 9000; // Use env PORT if available

app.use(cors());
app.use(express.json());

// ✅ GET request (Fetch data)
app.get("/api/posts", (req, res) => {
  try {
    if (!projects || !projects.projects) {
      throw new Error("Projects data is missing or corrupted");
    }
    res.json(projects.projects); // Ensure the correct structure
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
