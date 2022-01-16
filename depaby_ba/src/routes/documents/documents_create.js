const express = require('express');
const router = express.Router();
const QueryDocuments = require('../../classes/QueryDocuments');

/**
 * @swagger
 * /api/documents:
 *  post:
 *    tags:
 *      - documents
 *    description: Добавляем массив документов
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
 *                $ref: '#/definitions/depaby_document'
 *    responses:
 *      '200':
 *        description: Успешное добавление документа
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
 *      '400':
 *        description: Ошибка в теле запроса
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

router.post("/documents", async function (req, res) {
  // Создаем экземпляр класса
  const documents_object = new QueryDocuments(req.body.login, req.body.password);

  // Получаем массив продуктов
  const documents_array = req.body.data;

  // Если это не массив, а другой тип данных, то
  if (Array.isArray(documents_array) == false) {
    res.status(400).send({
      code: 400,
      message: 'Not found attribute `data`: [{}]',
    })
    return;
  }

  // Выполняем sql, и получаем ответ сервера
  const documents_response = await documents_object.create(req.body.data);

  res.status(documents_response.code).send(documents_response);
});

module.exports = router;
