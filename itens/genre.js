const restful = require('node-restful')

const mongoose = restful.mongoose

const genreSchema = new mongoose.Schema({

  name: { type: String, required: true },

  url: { type: String, required: false },  

  })

module.exports = restful.model('Genre', genreSchema)