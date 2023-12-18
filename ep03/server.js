import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// app.use((req, res, next) => {
//   console.log("Hello from middleware!");
//   next();
// });
app.use(express.static("dist"));
app.use(cors());

app.use(express.static("public"));
app.get("/api/test", (req, res) => {
  res.json({ name: "SumDev" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost/${port}`);
});
