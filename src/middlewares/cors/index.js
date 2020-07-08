const cors = require('cors');
const corsConfig = require('../../config/cors');

module.exports = app => {
    app.use(cors(corsConfig));
    
};