const express = require('express');
const router = express.Router();
const QueryAuth = require('./../../classes/QueryAuth');

/**
 * @swagger
 * /api/admin_auth:
 *  post:
 *    tags:
 *      - admin
 *    description: Проверка авторизации
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
 *    responses:
 *      '200':
 *        description: Успешная авторизация
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

router.post("/admin_auth", async function (req, res) {
  const auth_object = new QueryAuth(req.body.login, req.body.password);
  const auth_response = await auth_object.auth();
  res.status(auth_response.code).send(auth_response);
});

module.exports = router;
