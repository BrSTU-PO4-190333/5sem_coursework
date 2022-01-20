const express = require('express');
const router = express.Router();
const QueryProducts = require('../../scripts/AbstractQueryCrud/QueryCrudProducts');

/**
 * @swagger
 * /api/products:
 *  get:
 *    tags:
 *      - products
 *    description: Получаем все записи из таблицы БД
 *    parameters:
 *      - in: query
 *        name: id
 *        description: Вывод массива записи (нашли по ИД)
 *        required: false
 *        type: integer
 *      - in: query
 *        name: category
 *        description: Вывод массива записей по категории
 *        required: false
 *        type: string
 *      - in: query
 *        name: model
 *        description: Получить запись по модели
 *        required: false
 *        type: string
 *    responses:
 *      '200':
 *        description: Успешный ответ
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: integer
 *            message:
 *              type: string
 *            data:
 *              type: array
 *              items:
 *                $ref: '#/definitions/depaby_product'
 *      '418':
 *        description: Ошибка на сервере
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: integer
 *            message:
 *              type: string
 */

router.get("/products", async function (req, res) {
  const products_object = new QueryProducts();
  const products_response = await products_object.read(req.query);
  res.status(products_response.code).send(products_response);
});

module.exports = router;
