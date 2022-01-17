const express = require('express');
const router = express.Router();
const QueryContacts = require('../../scripts/AbstractQueryCrud/QueryCrudContacts');

/**
 * @swagger
 * /api/contacts:
 *  put:
 *    tags:
 *      - contacts
 *    description: Обновляем контакт по ид
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
 *              $ref: '#/definitions/depaby_contact'
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

router.put("/contacts", async function (req, res) {
  // Создаем экземпляр класса
  const contacts_object = new QueryContacts(req.body.login, req.body.password);

  // Выполняем sql
  const contacts_response = await contacts_object.update(req.body.id, req.body.data);

  // Возвращаем ответ сервера
  res.status(contacts_response.code).send(contacts_response);
});

module.exports = router;
