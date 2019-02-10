let express = require('express');
let router = express.Router();
//let mongoose = require('mongoose');

let contactModel = require('../models/contact');

let contactController = require('../controllers/contact');

//* GET Contact List page - READ Operation
router.get('/', contactController.displayContactList);

/* GET route for the Add page
  this will display the Add page */
router.get('/add', contactController.displayAddPage);

/* POST Route for processing the Add page */
router.post('/add', contactController.processAddPage); 

/* GET request - display the Edit page */
router.get('/edit/:id', contactController.displayEditPage)

/* POST request - Update the atabase with data from the EDIT page */
router.post('/edit/:id', contactController.processEditPage)

/*GET request to perform the delete action */
router.get('/delete/:id', contactController.processDelete);

module.exports = router;