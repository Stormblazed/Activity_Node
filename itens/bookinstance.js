const restful = require('node-restful');
const mongooseSchema = require("mongoose");

const Schema = mongooseSchema.Schema;
const mongoose = restful.mongoose;

const bookinstanceSchema = new mongoose.Schema({
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    imprint: { type: String, required: true },
    date_of_birth: { type: Date, required: true },
    due_back: { type: Date, required: true },
    url: { type: String, required: false }
})

module.exports = restful.model('Bookinstance', bookinstanceSchema)