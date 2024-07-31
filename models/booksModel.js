const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    rating: { type: Number, required: true },
    genre: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

const books = mongoose.model("comments", bookSchema);

module.exports = books;
