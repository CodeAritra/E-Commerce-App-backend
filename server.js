import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authroute from "./routes/authRoute.js";
import categoryroute from "./routes/categoryRoute.js";
import productroute from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
// import { fileURLToPath } from "url";

//config env
dotenv.config();

//esmodule fix
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//connect db
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname, "./client/build")));

//routes
app.use("/api/auth", authroute);
app.use("/api/category", categoryroute);
app.use("/api/product", productroute);

//rest api
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.get("/", (req, res) => {
  res.json("Running");
});

//port
const port = process.env.port || 5000;

//run listen
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
