const express = require("express");

const morgan = require("morgan");

const mongoose = require("mongoose");

const loginRouter = require(`${__dirname}/routers/loginRoute`);

const loginControllers = require(`${__dirname}/controllers/loginController`);

const app = express();

app.use(express.json());

app.use(express.static(`${__dirname}/assets`));

//app.use(morgan, "dev");

app.use("/v1/login", loginRouter);

module.exports = app;
