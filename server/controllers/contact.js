let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

//create a reference to a database schema
let contactModel = require('../models/contact');

module.exports.displayContactList = (req, res, next) =>{
    contactModel.find((err, contactList)=>{
        if(err){
            return console.error(err);
        }
        else{
            res.json({success: true, msg: 'Contact List Displayed', contactList: contactList, user: req.user});

        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.json({success: true, msg: 'Add Page is Displaying'});
}

module.exports.processAddPage = (req, res, next) => {
    console.log(req.body);
    
    let newContact = contactModel({
        "firstName": req.body.firstName,
        "lastName" : req.body.lastName,
        "age" : req.body.age,
        "email": req.body.email,
        "message": req.body.message

    })
    contactModel.create(newContact,(err, contactModel) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.json({success: true, msg: 'Message sent to Contact'});
        }
    })
}

module.exports.displayEditPage = (req, res, next) =>{
    let id = req.params.id;

    contactModel.findById(id, (err, contactObject) =>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //show the edit page
            res.json({success: true, msg: 'Edit Page is Displaying', contact: contactObject});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedContact  = contactModel({
        "_id" : id,
        "firstName": req.body.firstName,
        "lastName" : req.body.lastName,
        "age" : req.body.age,
        "email": req.body.email,
        "message": req.body.message

    })

    contactModel.update({_id: id}, updatedContact, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //show the edit page
            res.json({success: true, msg: 'Successfully Edited Mmessage', contact: updatedContact});
        }
    });
}

module.exports.processDelete = (req, res, next) => {
    let id = req.params.id;

    contactModel.remove ({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.json({success: true, msg: 'Successfully Deleted Message'});
        }
    });
}