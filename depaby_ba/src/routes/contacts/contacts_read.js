const express = require('express');
const router = express.Router();
const QueryContacts = require('./../../classes/QueryContacts');

/**
 * @swagger
 * /api/contacts:
 *  get:
 *    tags:
 *      - contacts
 *    description: Получаем все контакты из таблицы базы данных
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
 *                $ref: '#/definitions/depaby_contact'
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

router.get("/contacts", async function (req, res) {
  const contacts_object = new QueryContacts();
  const contacts_response = await contacts_object.read(req.query);
  res.status(contacts_response.code).send(contacts_response);
});

module.exports = router;
