const express = require('express');
const UserRepository = require('./repositories/userRepository');
const UserServices = require('./services/userServices');

const routes = express.Router();

routes.get("/users/:username", UserServices.getId);
routes.post("/users", UserServices.create);
// routes.put("/users/:id", UserServices.updateId);
// routes.delete("/users/:id", UserRepository.deleteId);

module.exports = routes;