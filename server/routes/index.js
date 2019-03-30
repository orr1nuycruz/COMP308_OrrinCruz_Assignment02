let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET pages from the Nav menu. */
router.get('/',  indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/projects', indexController.displayProductsPage);

router.get('/services', indexController.displayServicesPage);

router.get('/contact', indexController.displayContactPage);



/* GET - displays the login page */
router.get('/login', indexController.displayLoginPage);

/* POST - processes the login page */
router.post('/login', indexController.processLoginPage);

/* GET - displays the User Registration page */
router.get('/register', indexController.displayRegisterPage);

/* POST - processes the User Registration page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);


module.exports = router;
