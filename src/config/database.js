require('./dotenv');

module.exports = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    storege: '../__tests__/database.sqlite',
    loggins: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAlls: true
    }
};