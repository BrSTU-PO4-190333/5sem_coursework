const express = require('express');
const router = express.Router();
const QueryProductCategories = require('../../scripts/AbstractQueryCrud/QueryCrudProductsCategories');

/**
 * @swagger
 * /api/productCategories:
 *  delete:
 *    tags:
 *      - productCategories
 *    description: Очищаем таблицу записей, либо удаляем запись по ид
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
 *    responses:
 *      '200':
 *        description: Успешная очистка таблицы, либо успешное удаление по ид
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

router.delete("/productCategories", async function (req, res) {
  console.log(req.body)
  // Создаем экземпляр класса
  const productCategories_object = new QueryProductCategories(req.body.login, req.body.password);

  // Выполняем sql
  const productCategories_response = await productCategories_object.delete(req.body);

  // Возвращаем ответ сервера
  res.status(productCategories_response.code).send(productCategories_response);
});

module.exports = router;
