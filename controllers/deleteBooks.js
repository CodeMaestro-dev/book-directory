const books = require("../models/booksModel");

async function deleteBook(req, res) {
  const param = req.param("id");

  try {
    const deletedBook = await books.findByIdAndDelete({
      _id: param,
    });

    if (deletedBook.length === 0) {
      res.status(404).json({ error: `No books found with id: ${param}` });
      return;
    }

    res.status(200).json({ message: "Book deleted", data: deletedBook });
    return;
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error });
  }
}

module.exports = deleteBook;
