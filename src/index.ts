import express from "express";
import cors from "cors";
import diaryRouter from "./routes/diaries";

const allowedOrigins = ["*"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();
app.use(cors(options));
app.use(express.json());

const PORT: number = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
