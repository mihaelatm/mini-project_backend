import mongoose from "mongoose";
import "dotenv/config";

const URI = process.env.MONGO_URI;

function connectToMongoDB() {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((error) => {
      console.error("Connection to MongoDB failed: ", error);
      process.exit(1); // Termină aplicația dacă există o eroare la conectare
    });
}

export default connectToMongoDB;
