import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import ticketRoutes from "./routes/ticketRoutes.js";


dotenv.config();

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());
app.use("/tickets", ticketRoutes);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("DB connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT}`);
});
