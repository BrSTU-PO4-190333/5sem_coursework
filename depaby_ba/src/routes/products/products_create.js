const express = require('express');
const router = express.Router();
const QueryProducts = require('../../classes/QueryProducts');

/**
 * @swagger
 * /api/products:
 *  post:
 *    tags:
 *      - products
 *    description: Добавляем массив продуктов
 *    parameters:
 *      - in: body
 *        description: Тело запроса
 *        required: true
 *        schema:
 *          type: object
 *          properties:
 *            login:
 *              type: string
 *            password:
 *              type: string
 *            data:
 *              type: array
 *              items:
 *                $ref: '#/definitions/depaby_product'
 *    responses:
 *      '200':
 *        description: Успешное добавление товара
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: integer
 *            message:
 *              type: string
 *      '400':
 *        description: Ошибка в теле запроса
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: integer
 *            message:
 *              type: string
 *      '401':
 *        description: Не авторизовался
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: integer
 *            message:
 *              type: string
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

router.post("/products", async function (req, res) {
  // Создаем экземпляр класса
  const products_object = new QueryProducts(req.body.login, req.body.password);

  // Получаем массив продуктов
  const products_array = req.body.data;

  // Если это не массив, а другой тип данных, то
  if (Array.isArray(products_array) == false) {
    res.status(400).send({
      code: 400,
      message: 'Not found attribute `data`: [{}]',
    })
    return;
  }

  // Выполняем sql, и получаем ответ сервера
  const products_response = await products_object.create(req.body.data);

  res.status(products_response.code).send(products_response);
});

module.exports = router;
