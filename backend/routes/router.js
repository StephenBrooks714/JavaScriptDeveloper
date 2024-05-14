const express = require("express");
const router = express.Router();
const cache = require("../config/cache");

const homeController = require("../controllers/homePage");
const sendFormController = require("../controllers/sendContactForm");
const thankYouController = require("../controllers/thankYouPage");
const projectsController = require("../controllers/projectsPage");
const servicesController = require("../controllers/servicesPage");

router.get("/", cache(2), homeController);
router.post("/send/form", sendFormController);
router.get("/thankYou", thankYouController);
router.get("/projects", projectsController);
router.get("/services", servicesController);

module.exports = router;