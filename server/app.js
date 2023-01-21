import express from "express";
import cors from "cors";
import morgan from "morgan";
import apiRoutes from "./routes/index.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use("/api/v1", apiRoutes)

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello world!" });
});

export { app };