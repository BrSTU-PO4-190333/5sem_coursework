const express = require('express');
const router = express.Router();
const QueryDocuments = require('./../../classes/QueryDocuments');

/**
 * @swagger
 * /api/documents:
 *  get:
 *    tags:
 *      - documents
 *    description: Получаем все документы из таблицы базы данных
 *    parameters:
 *      - in: query
 *        name: id
 *        description: Вывод массива со структурой продукта (нашли по ИД)
 *        required: false
 *        type: integer
 *      - in: query
 *        name: category
 *        description: вывод записей по категории
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
 *                $ref: '#/definitions/depaby_document'
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

router.get("/documents", async function (req, res) {
  const documents_object = new QueryDocuments();
  const documents_response = await documents_object.read(req.query);
  res.status(documents_response.code).send(documents_response);
});

module.exports = router;
