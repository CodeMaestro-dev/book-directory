require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const books = require("./routes/books")

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/v1/", books)

mongoose
  .connect(process.env.DB_URI)
  .then(console.log("Connected to Database"))
  .catch((error) => {
    console.error(error);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
