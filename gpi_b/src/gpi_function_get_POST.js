// gpi_ Функция получает JS объект из тела POST
function gpi_get_POST(gpi_string_body) {
    try {
        gpi_args = JSON.parse(gpi_string_body);
    }
    // gpi_ Если в теле POST не JS объект
    catch (error) {
        return {};
    }

    // gpi_ Если в теле POST число
    if (typeof gpi_args == 'number') {
        return {};
    }

    return gpi_args;
}

module.exports = gpi_get_POST;
