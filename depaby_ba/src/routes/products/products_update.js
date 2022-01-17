const express = require('express');
const router = express.Router();
const QueryProducts = require('../../scripts/AbstractQueryCrud/QueryCrudProducts');

/**
 * @swagger
 * /api/products:
 *  put:
 *    tags:
 *      - products
 *    description: Обновляем продукт по ид
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
 *            id:
 *              type: integer
 *            data:
 *              $ref: '#/definitions/depaby_product'
*    responses:
 *      '200':
 *        description: Успешное обновление
 *        schema:
 *          type: object
 *          properties:
 *            code:
 *              type: integer
 *            message:
 *              type: string
 *      '202':
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

router.put("/products", async function (req, res) {
  // Создаем экземпляр класса
  const products_object = new QueryProducts(req.body.login, req.body.password);

  // Выполняем sql
  const products_response = await products_object.update(req.body.id, req.body.data);

  // Возвращаем ответ сервера
  res.status(products_response.code).send(products_response);
});

module.exports = router;
