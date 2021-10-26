const express = require("express");
const route = express.Router();
const { userRegister,userLogin } = require("../controllers/user_authController");

route.post("/register", userRegister);
route.post("/login", userLogin);

module.exports = route;
