const express = require('express');
const router = express.Router();
const QueryProductCategories = require('../../classes/QueryProductCategories');

/**
 * @swagger
 * /api/productCategories:
 *  get:
 *    tags:
 *      - productCategories
 *    description: Получаем все категории продукта из таблицы базы данных
 *    parameters:
 *      - in: query
 *        name: id
 *        description: Вывод массива категории продукта по ИД
 *        required: false
 *        type: integer
 *      - in: query
 *        name: sort
 *        description: сортировка по полю (id) или массив отсортированный задом на перёд (invert_id)
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
 *                $ref: '#/definitions/depaby_productCategories'
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
