const books = require("../models/booksModel");

async function readBooks(req, res) {
  const { title } = req.query;

  if (title) {
    // Handle reading a book by title
    try {
      const foundedBook = await books.find({
        title: { $regex: title, $options: "i" },
      });

      if (foundedBook.length === 0) {
        res
          .status(404)
          .json({ message: `No books found with title: ${title}` });
        return;
      }

      res.status(200).json({ data: foundedBook });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Handle reading all books
    try {
      const allBooks = await books.find();

      if (allBooks.length === 0) {
        res.status(404).json({ message: "No books found" });
        return;
      }

      res.status(200).json({ data: allBooks });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = readBooks;
