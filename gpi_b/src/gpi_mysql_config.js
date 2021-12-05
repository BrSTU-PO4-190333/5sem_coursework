require('dotenv').config();

module.exports = {
    host: process.env.MySQL_HOST,
    user: process.env.MySQL_user,
    password: process.env.MySQL_password,
    database: process.env.MySQL_DATABASE,
};
