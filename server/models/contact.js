let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({

    firstname: String,
    lastname: String,
    age: Number
},
{
    collection: "first"
})

//model name. not a database
module.exports = mongoose.model('test', contactSchema);
