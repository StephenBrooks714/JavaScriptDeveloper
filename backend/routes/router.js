const express = require("express");
const router = express.Router();
const cache = require("../config/cache");

const homeController = require("../controllers/homePage");
const sendFormController = require("../controllers/sendContactForm");
const thankYouController = require("../controllers/thankYouPage");
const projectsController = require("../controllers/projectsPage");
const servicesController = require("../controllers/servicesPage");
// users
// const registerController = require("../controllers/registerPage");
const storeUserController = require("../controllers/storeUserAction");
const loginController = require("../controllers/loginPage");
const loginUserController = require("../controllers/loginUser");
const logoutController = require("../controllers/logoutUser");

router.get("/", cache(2), homeController);
router.post("/send/form", sendFormController);
router.get("/thankYou", thankYouController);
router.get("/projects", projectsController);
router.get("/services", servicesController);
// users
// router.get("/register", registerController);
router.post("/store/user", storeUserController);
router.get("/login", loginController);
router.post("/login/user", loginUserController)
router.get("/logout", logoutController);

module.exports = router;