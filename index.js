import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js"; 
import claimRoute from "./routes/claimRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => console.log(err));


app.use("/api/users", userRoute);
app.use("/api/claim", claimRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
