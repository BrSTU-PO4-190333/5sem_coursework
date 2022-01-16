const express = require('express');
const router = express.Router();
const QueryProducts = require('../../classes/QueryProducts');

/**
 * @swagger
 * /api/products:
 *  get:
 *    tags:
 *      - products
 *    description: Получаем все продукты из таблицы базы данных
 *    parameters:
 *      - in: query
 *        name: id
 *        description: Вывод массива продукта по ИД
 *        required: false
 *        type: integer
 *      - in: query
 *        name: sort
 *        description: сортировка по полю (id, model, name, ...) или массив отсортированный задом на перёд (invert_id, invert_model, invert_name)
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
