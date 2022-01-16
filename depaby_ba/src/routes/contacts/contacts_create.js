const express = require('express');
const router = express.Router();
const QueryContacts = require('../../classes/QueryContacts');

/**
 * @swagger
 * /api/contacts:
 *  post:
 *    tags:
 *      - contacts
 *    description: Добавляем массив контактов
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
 *                $ref: '#/definitions/depaby_contact'
 *    responses:
 *      '200':
 *        description: Успешное добавление контакта
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

router.post("/contacts", async function (req, res) {
  // Создаем экземпляр класса
  const contacts_object = new QueryContacts(req.body.login, req.body.password);

  // Получаем массив контактов
  const contacts_array = req.body.data;

  // Если это не массив, а другой тип данных, то
  if (Array.isArray(contacts_array) == false) {
    res.status(400).send({
      code: 400,
      message: 'Not found attribute `data`: [{}]',
    })
    return;
  }

  // Выполняем sql, и получаем ответ сервера
  const contacts_response = await contacts_object.create(req.body.data);

  res.status(contacts_response.code).send(contacts_response);
});

module.exports = router;
