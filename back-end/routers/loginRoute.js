const express = require("express");

const controllers = require(`${__dirname}/../controllers/loginController`);

const router = express.Router();

router
    .route("/")
    .get(controllers.getLogin);

module.exports = router;
