const express = require('express');
const router = express.Router();
const QueryContacts = require('../../scripts/AbstractQueryCrud/QueryCrudContacts');

/**
 * @swagger
 * /api/contacts:
 *  delete:
 *    tags:
 *      - contacts
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

router.delete("/contacts", async function (req, res) {
  console.log(req.body)
  // Создаем экземпляр класса
  const contacts_object = new QueryContacts(req.body.login, req.body.password);

  // Выполняем sql
  const contacts_response = await contacts_object.delete(req.body);

  // Возвращаем ответ сервера
  res.status(contacts_response.code).send(contacts_response);
});

module.exports = router;
