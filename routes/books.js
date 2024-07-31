const express = require("express");
const router = express.Router();
const createBooks = require("../controllers/createBooks");
const readBooks = require("../controllers/readBooks");
const updateBook = require("../controllers/updateBooks");
const deleteBook = require("../controllers/deleteBooks");

router.post("/book", createBooks);
router.get("/books", readBooks);
router.patch("/books/:id", updateBook)
router.delete("/books/:id", deleteBook)

module.exports = router;
