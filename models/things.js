let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({

    name: String,
    description: String
},
{
    collection: "favourite-things"
})

module.exports = mongoose.model('second', contactSchema);
