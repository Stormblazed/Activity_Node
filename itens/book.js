const restful = require('node-restful');
const mongooseSchema = require("mongoose");

const Schema = mongooseSchema.Schema;
const mongoose = restful.mongoose;

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
    summary: { type: String, required: true },
    isbn: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectId, ref: "Genre" }],
    url: { type: String, required: false }
  });

module.exports = restful.model('Book', bookSchema);