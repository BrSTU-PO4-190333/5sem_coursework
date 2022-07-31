const express = require('express');
const router = express.Router();
const QueryDocuments = require('./../../scripts/AbstractQueryCrud/QueryCrudDocuments');

/**
 * @swagger
 * /api/documents:
 *  delete:
 *    tags:
 *      - documents
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

router.delete("/documents", async function (req, res) {
  console.log(req.body)
  // Создаем экземпляр класса
  const documents_object = new QueryDocuments(req.body.login, req.body.password);

  // Выполняем sql
  const documents_response = await documents_object.delete(req.body);

  // Возвращаем ответ сервера
  res.status(documents_response.code).send(documents_response);
});

module.exports = router;
