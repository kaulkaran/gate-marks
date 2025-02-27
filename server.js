const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const linkRoutes = require("./routes/linkRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["https://willowy-cheesecake-99378c.netlify.app/", "http://localhost:5173"], // Allow only your frontend
    methods: "GET,POST,PUT,DELETE",
}));

app.use("/api/links", linkRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
