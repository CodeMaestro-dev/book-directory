const books = require("../models/booksModel");

async function updateBook(req, res) {
  const param = req.param("id");
  const { title, author, rating, genre } = req.body;

  try {
    const updateBook = await books.findByIdAndUpdate(
      {
        _id: param,
      },
      {
        title: title,
        author: author,
        rating: rating,
        genre: genre,
      }
    );

    if (updateBook.length === 0) {
      res.status(404).json({ error: `No books found with id: ${param}` });
      return;
    }

    res.status(200).json({ message: "Book updated", data: updateBook });
    return;
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error });
  }
}

module.exports = updateBook;
