import express from "express";
import cors from "cors";
import connectToMongoDB from "./db/index.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

connectToMongoDB();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
