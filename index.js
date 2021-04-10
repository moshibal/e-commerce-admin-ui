import express from "express";
import cros from "cors";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cros());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`your server is running on the ${PORT}`);
  }
});
