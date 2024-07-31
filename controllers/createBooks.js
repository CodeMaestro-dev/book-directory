const books = require("../models/booksModel");

async function createBook(req, res) {
  const { title, author, rating, genre } = req.body;

  if (!title || !author || !rating || !genre) {
    res.status(400).json({ message: "please fill out all fields" });
    return;
  }

  try {

    const alreadyExisitingBook = await books.findOne({
        title: title,
        author: author,
    })

    if(alreadyExisitingBook) {
        res.status(400).json({message: "book already exists"})
        return;
    }

    const createBook = await books.create({
      title: title,
      author: author,
      rating: rating,
      genre: genre,
    });

    if (createBook) {
      res.status(201).json({ data: createBook });
      return;
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error });
  }
}

module.exports = createBook;
