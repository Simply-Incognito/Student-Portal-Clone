const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

let loginPage = fs.readFileSync(`${__dirname}/../..//front-end/login.html`, "utf8");

exports.getLogin = async (req, res) => {
	try {
	     res.status(200).send(loginPage);
    } catch(err) {
	    console.log(err);
  }
}
