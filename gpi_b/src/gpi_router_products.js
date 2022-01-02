// gpi_ Подключаем библиотеки
const gpi_express = require('express');
const gpi_router = gpi_express.Router();
const gpi_class_QueryProducts = require('./gpi_class_QueryProducts');
const gpi_function_get_POST = require('./gpi_function_get_POST');

// gpi_ Роутер, который выводит все продукты
gpi_router.get("/gpi_get_products", async function (gpi_request, gpi_response) {
    const gpi_obj = new gpi_class_QueryProducts();
    console.log(gpi_request.query)
    const gpi_res = await gpi_obj.gpi_get_products(gpi_request.query);
    gpi_response.send(gpi_res);
});

// gpi_ Роутер, который добавляет продукты
gpi_router.post("/gpi_add_products", async function (gpi_request, gpi_response) {
    // gpi_ Собираю тело POST из кусочков файла
    let gpi_string_body = "";
    gpi_request.on("data", function (gpi_chuck) {
        gpi_string_body += gpi_chuck.toString();
    });

    // gpi_ Когда у нас готовая строка тела
    gpi_request.on("end", async function () {
        const gpi_POST = gpi_function_get_POST(gpi_string_body);
        const gpi_obj = new gpi_class_QueryProducts(gpi_POST.gpi_login, gpi_POST.gpi_password);
        const gpi_res = await gpi_obj.gpi_add_products(gpi_POST.gpi_array);
        gpi_response.send(gpi_res);
    });
});

// gpi_ Роутер, который очищает таблицу
gpi_router.post("/gpi_delete_table_products", async function (gpi_request, gpi_response) {
    // gpi_ Собираю тело POST из кусочков файла
    let gpi_string_body = "";
    gpi_request.on("data", function (gpi_chuck) {
        gpi_string_body += gpi_chuck.toString();
    });

    // gpi_ Когда у нас готовая строка тела
    gpi_request.on("end", async function () {
        const gpi_POST = gpi_function_get_POST(gpi_string_body);
        const gpi_obj = new gpi_class_QueryProducts(gpi_POST.gpi_login, gpi_POST.gpi_password);
        const gpi_res = await gpi_obj.gpi_delete_table_products();
        gpi_response.send(gpi_res);
    });
});

// gpi_ Роутер, который удаляет элемент по ид
gpi_router.post("/gpi_delete_product", async function (gpi_request, gpi_response) {
    // gpi_ Собираю тело POST из кусочков файла
    let gpi_string_body = "";
    gpi_request.on("data", function (gpi_chuck) {
        gpi_string_body += gpi_chuck.toString();
    });

    // gpi_ Когда у нас готовая строка тела
    gpi_request.on("end", async function () {
        const gpi_POST = gpi_function_get_POST(gpi_string_body);
        const gpi_obj = new gpi_class_QueryProducts(gpi_POST.gpi_login, gpi_POST.gpi_password);
        const gpi_res = await gpi_obj.gpi_delete_product(gpi_POST.gpi_id);
        gpi_response.send(gpi_res);
    });
});

// gpi_ Роутер, который редактирует запись по ид
gpi_router.post("/gpi_update_product", async function (gpi_request, gpi_response) {
    // gpi_ Собираю тело POST из кусочков файла
    let gpi_string_body = "";
    gpi_request.on("data", function (gpi_chuck) {
        gpi_string_body += gpi_chuck.toString();
    });

    // gpi_ Когда у нас готовая строка тела
    gpi_request.on("end", async function () {
        const gpi_POST = gpi_function_get_POST(gpi_string_body);
        const gpi_obj = new gpi_class_QueryProducts(gpi_POST.gpi_login, gpi_POST.gpi_password);
        const gpi_res = await gpi_obj.gpi_update_product(gpi_POST.gpi_id, gpi_POST.gpi_data);
        gpi_response.send(gpi_res);
    });
});

// gpi_ Экспортируем
module.exports = gpi_router;
