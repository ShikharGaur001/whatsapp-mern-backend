import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import auth from "./routes/auth.routes.js"; // Ensure the file extension is included

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", auth);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
