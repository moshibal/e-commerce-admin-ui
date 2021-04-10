import express from "express";
import cros from "cors";
import morgan from "morgan";

//creating express app
const app = express();
const PORT = process.env.PORT || 3000;

///using middleware
app.use(cros());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Load routers
import loginRouter from "./routers/login.js";

//APIs
app.use("/api/v1/login", loginRouter);

//router
app.get("/", (req, res) => {
  res.send("hello world");
});
//404
app.use((req, res, next) => {
  const error = new Error("resource not found");
  error.status = 404;
  next(error);
});
//handle error
import { handleError } from "./utils/errorHandler.js";
app.use((error, req, res, next) => {
  handleError(error, res);
});
app.listen(PORT, (error) => {
  if (!error) {
    console.log(`your server is running on the ${PORT}`);
  }
});
