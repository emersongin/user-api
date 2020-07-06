const express = require('express');
const UserServices = require('./services/userServices');

const routes = express.Router();

routes.post("/users", UserServices.store);

module.exports = routes;