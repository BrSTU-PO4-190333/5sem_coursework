const express = require('express');
const router = express.Router();
const QueryProductCategories = require('../../classes/QueryProductCategories');

/**
 * @swagger
 * /api/productCategories:
 *  post:
 *    tags:
 *      - productCategories
 *    description: Добавляем массив категории продуктов
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
 *                $ref: '#/definitions/depaby_productCategories'
 *    responses:
 *      '200':
 *        description: Успешное добавление категории продукта
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

router.post("/productCategories", async function (req, res) {
  // Создаем экземпляр класса
  const productCategories_object = new QueryProductCategories(req.body.login, req.body.password);

  // Получаем массив категорию продуктаов
  const productCategories_array = req.body.data;

  // Если это не массив, а другой тип данных, то
  if (Array.isArray(productCategories_array) == false) {
    res.status(400).send({
      code: 400,
      message: 'Not found attribute `data`: [{}]',
    })
    return;
  }

  // Выполняем sql, и получаем ответ сервера
  const productCategories_response = await productCategories_object.create(req.body.data);

  res.status(productCategories_response.code).send(productCategories_response);
});

module.exports = router;
