let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to a database schema
let contactModel = require('../models/contact');
// let contact = require('../models/things');

//* GET Contact List page - READ Operation
router.get('/', (req, res, next) =>{
    contactModel.find((err, contactList)=>{
        if(err){
            return console.error(err);
        }
        else{
            console.log(contactList);
            
            res.render('contacts/index',{
                title: 'Contact List',
                contactList : contactList
            });
            
        }
    });
})

/* GET route for the Add page
  this will display the Add page */
router.get('/add', (req, res, next) => {
    res.render('contacts/add',{
        title: 'Add New Contact'
    });
});

/* POST Route for processing the Add page */
router.post('/add', (req, res, next) => {
    console.log(req.body);
    
    let newContact = contactModel({
        "firstname": req.body.firstName,
        "lastname" : req.body.lastName,
        "age" : req.body.age

    })
    contactModel.create(newContact,(err, contactModel) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            // refresh the contact list
            res.redirect('/contact-list');
        }
    })
    
}); 

module.exports = router;