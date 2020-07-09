require('./config/dotenv');

const express = require('express');
const routes = require('./routes');
const cors = require("./middlewares/cors");
require('./database');

class App {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();

    }

    middlewares() {
        cors(this.express);
        this.express.use(express.json());

    }

    routes() {
        this.express.use(routes);
    }

}

module.exports = new App().express;
