const express = require('express');
const routes = require('./routes');
const cors = require("./middlewares/cors");

require('./database');

const app = express();

cors(app);
app.use(express.json());
app.use(routes);

app.listen('3001');
