const express = require('express');
const router = express.Router();
const QueryDocuments = require('./../../scripts/AbstractQueryCrud/QueryCrudDocuments');

/**
 * @swagger
 * /api/documents:
 *  put:
 *    tags:
 *      - documents
 *    description: Обновляем данные по ид
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
 *              $ref: '#/definitions/depaby_document'
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

router.put("/documents", async function (req, res) {
  // Создаем экземпляр класса
  const documents_object = new QueryDocuments(req.body.login, req.body.password);

  // Выполняем sql
  const documents_response = await documents_object.update(req.body.id, req.body.data);

  // Возвращаем ответ сервера
  res.status(documents_response.code).send(documents_response);
});

module.exports = router;
