let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to a database schema
let about= require('../models/things');

//* GET Contact List page - READ Operation
router.get('/', (req, res, next) =>{
    about.find((err, aboutList)=>{
        if(err){
            return console.error(err);
        }
        else{
            console.log(aboutList);
            
            res.render('abouts/index',{
                title: 'My Interests',
                aboutList : aboutList
            });
            
        }
    });
})

module.exports = router;