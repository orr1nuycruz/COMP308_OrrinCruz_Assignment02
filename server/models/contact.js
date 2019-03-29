let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({

    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    message: String
},
{
    collection: "messages"
})

//model name. not a database
module.exports = mongoose.model('test', contactSchema);
