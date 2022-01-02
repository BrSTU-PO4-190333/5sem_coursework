const gpi_mysql = require('mysql2/promise');
const gpi_dotenv = require('dotenv');

gpi_dotenv.config();

module.exports = async function(gpi_request, gpi_response, gpi_function = (gpi_response) => {gpi_response.send("Hello!")}) {
    try {
        const gpi_connection = gpi_get_connection();
        const gpi_sql = `SELECT * FROM WHERE 'gpi_login' = 'root'`;
        gpi_function(gpi_response);
    }
    catch(gpi_error) {
        console.log(gpi_error);
        gpi_response.send({
            gpi_error: gpi_error,
        });
    }
}

function gpi_get_connection()
{
    let gpi_connection = gpi_mysql.createConnection({
        host: process.env.gpi_mysql_host,
        user: process.env.gpi_mysql_user,
        password: process.env.gpi_mysql_password,
        database: process.env.gpi_mysql_database,
    });
    return gpi_connection;
}