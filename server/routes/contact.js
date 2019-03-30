let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let contactController = require('../controllers/contact');

function requireAuth(req, res, next){
  console.log(req.user.displayName);
  // check if the usr is logged in
  //if(!req.isAuthenticated() || (req.user.username != "admin")){
  if((req.isAuthenticated()) && (req.user.displayName == 'admin')){
   next();
  }
  else{
    return res.redirect('/login');
  }
}


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