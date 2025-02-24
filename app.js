
import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import { errHandler, notFound } from "./src/middleware/errMiddleware.js";
import cors from "cors";
import useragent from "express-useragent";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// Load environment variables
dotenv.config();
const port = process.env.PORT || 3006;

// Connect to the database
await connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(useragent.express());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});







// app.set("views", viewsPath);
// app.set("view engine", "ejs");





// Error handling middleware
app.use(notFound);
app.use(errHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
