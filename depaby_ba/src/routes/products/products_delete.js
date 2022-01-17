const express = require('express');
const router = express.Router();
const QueryProducts = require('../../scripts/AbstractQueryCrud/QueryCrudProducts');

/**
 * @swagger
 * /api/products:
 *  delete:
 *    tags:
 *      - products
 *    description: Удаляем продукт по ид, либо очищаем таблицу продуктов
 *    parameters:
 *      - in: query
 *        name: id
 *        description: Ид продукта, который нужно удалить. В противном случае очистится вся таблица
 *        required: false
 *        type: integer
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
*    responses:
 *      '200':
 *        description: Успешное удаление
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

router.delete("/products", async function (req, res) {
  console.log(req.body)
  // Создаем экземпляр класса
  const products_object = new QueryProducts(req.body.login, req.body.password);

  // Выполняем sql
  const products_response = await products_object.delete(req.body);

  // Возвращаем ответ сервера
  res.status(products_response.code).send(products_response);
});

module.exports = router;
