const express = require('express');
const router = express.Router();
const QueryProductCategories = require('../../scripts/AbstractQueryCrud/QueryCrudProductsCategories');

/**
 * @swagger
 * /api/productCategories:
 *  get:
 *    tags:
 *      - productCategories
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
 *                $ref: '#/definitions/depaby_productCategory'
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

router.get("/productCategories", async function (req, res) {
  const productCategories_object = new QueryProductCategories();
  const productCategories_response = await productCategories_object.read(req.query);
  res.status(productCategories_response.code).send(productCategories_response);
});

module.exports = router;
