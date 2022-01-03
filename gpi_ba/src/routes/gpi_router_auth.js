// gpi_ Подключаем библиотеки
const gpi_express = require('express');
const gpi_router = gpi_express.Router();
const gpi_class_Query = require('./../scripts/gpi_class_Query');
const gpi_function_get_POST = require('./../scripts/gpi_function_get_POST');

// gpi_ Роутер
gpi_router.post("/gpi_auth", async function (gpi_request, gpi_response) {
    let gpi_string_body = "";
    
    // gpi_ Собираю тело из кусочков файла
    gpi_request.on("data", function (gpi_chuck) {
        gpi_string_body += gpi_chuck.toString();
    });

    // gpi_ Когда у нас готовая строка тела
    gpi_request.on("end", async function () {
        const gpi_POST = gpi_function_get_POST(gpi_string_body);

        const gpi_obj = new gpi_class_Query(gpi_POST.gpi_login, gpi_POST.gpi_password);
        const gpi_res = await gpi_obj.gpi_auth();
        gpi_response.send(gpi_res);
    });
});

// gpi_ Экспортируем
module.exports = gpi_router;
