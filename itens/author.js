const restful = require('node-restful')

const mongoose = restful.mongoose

const authorSchema = new mongoose.Schema({

  first_name: { type: String, required: true },
  family_name: { type: String, required: true },  
  date_of_birth: { type: Date, required: true },  
  date_of_death: { type: Date, required: true },

  name: { type: String, required: false },
  lifespan: { type: String, required: false },  
  url: { type: String, required: false }

  })

module.exports = restful.model('Author', authorSchema)