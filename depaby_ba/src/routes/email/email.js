require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/email', async function (req, res) {
    try {
        // Список электронных почт для получения сообщения, отправлленным сервером
        let receivers = [
            req.body.email,
            process.env.depaby_nodemailer_MANAGER,
        ];

        let text = `;;;;;; \n`;
        let html = '';

        // = = = = = = = = HTML шапка письма
        text += `Организация:;${req.body.company};;;;; \n`;
        text += `Контактное лицо:;${req.body.contact};;;;; \n`;
        text += `E-mail:;${req.body.email};;;;; \n`;
        text += `Телефон:;${req.body.phone};;;;; \n`;
        text += `Адрес:;${req.body.address};;;;; \n`;
        text += `;;;;;; \n`;
        html += `
<table>
    <tr>
        <td>Организация:</td>
        <td><b>${req.body.company}</b></td>
    </tr>
    <tr>
        <td>Контактное лицо:</td>
        <td><b>${req.body.contact}</b></td>
    </tr>
    <tr>
        <td>E-mail:</td>
        <td><b>${req.body.email}</b></td>
    </tr>
    <tr>
        <td>Телефон:</td>
        <td><b>${req.body.phone}</b></td>
    </tr>
    <tr>
        <td>Адрес:</td>
        <td><b>${req.body.address}</b></td>
    </tr>
</table>
`;

        // = = = = = = = = HTML таблица с заказом (шапка таблицы)
        text += `№;Картинка;Модель;Наименование;Цена за 1 шт. без НДС (BYN); Количество (штуки); Общая цена (BYN) \n`;
        html += `
<table style="border-collapse: collapse; margin-bottom: 8px;">
    <thead>
        <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #eaecef; padding: 8px;">№</th>
            <th style="border: 1px solid #eaecef; padding: 8px;">Картинка</th>
            <th style="border: 1px solid #eaecef; padding: 8px;">Модель</th>
            <th style="border: 1px solid #eaecef; padding: 8px;">Наименование</th>
            <th style="border: 1px solid #eaecef; padding: 8px;">Цена за 1 шт. без НДС (BYN)</th>
            <th style="border: 1px solid #eaecef; padding: 8px;">Количество (штуки)</th>
            <th style="border: 1px solid #eaecef; padding: 8px;">Общая цена (BYN)</th>
        </tr>
    </thead>
    <tbody>
`;
        // = = = = = = = = HTML таблица с заказом (тело таблицы)
        req.body.array.forEach(function(value, index) {
            text += `${index + 1};${value.depaby_img_href};${value.depaby_model};${value.depaby_name};${value.depaby_cost_byn};${value.count};${value.product_sum} \n`;
            html += "<tr>";
            html += `<td style="border: 1px solid #eaecef; padding: 8px;">${index + 1}</td>`;
            html += `<td style="border: 1px solid #eaecef; padding: 8px;"><img src="${value.depaby_img_href}" alt="" style="max-width: 64px; max-height: 64px;" /></td>`;
            html += `<td style="border: 1px solid #eaecef; padding: 8px;">${value.depaby_model}</td>`;
            html += `<td style="border: 1px solid #eaecef; padding: 8px;">${value.depaby_name}</td>`;
            html += `<td style="border: 1px solid #eaecef; padding: 8px;">${value.depaby_cost_byn}</td>`;
            html += `<td style="border: 1px solid #eaecef; padding: 8px;">${value.count}</td>`;
            html += `<td style="border: 1px solid #eaecef; padding: 8px;">${value.product_sum}</td>`;
            html += "</tr>";
        });

        // = = = = = = = = HTML таблица с заказом (подвал таблицы)
        text += `;;;;;;${req.body.sum} BYN \n`;
        text += `;;;;;; \n`;
        html += `
        <tr style="background-color: #f2f2f2;">
            <td style="border: 1px solid #eaecef; padding: 8px;"></td>
            <td style="border: 1px solid #eaecef; padding: 8px;"></td>
            <td style="border: 1px solid #eaecef; padding: 8px;"></td>
            <td style="border: 1px solid #eaecef; padding: 8px;"></td>
            <td style="border: 1px solid #eaecef; padding: 8px;"></td>
            <td style="border: 1px solid #eaecef; padding: 8px;"></td>
            <td style="border: 1px solid #eaecef; padding: 8px;"><b>${req.body.sum} BYN<b></td>
        </tr>
    </tbody>
</table>`;

        // = = = = = = = = HTML конец письма
        text += `Итого;${req.body.sum} BYN;;;;;`;
        html += `
<table>
    <tr>
        <td>Итого:</td>
        <td style="font-weight: bolder;">${req.body.sum} BYN</td>
    </tr>
</table>
`; 

        console.log(text);
        console.log(html);

        // = = = = = = = = Функция, которая отправляет сообщение
        let transporter = nodemailer.createTransport({
            host: process.env.depaby_nodemailer_host,
            port: process.env.depaby_nodemailer_port,
            secure: process.env.depaby_nodemailer_secure,
            auth: {
                user: process.env.depaby_nodemailer_SERVER,
                pass: process.env.depaby_nodemailer_pass,
            },
        });

        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        month = month < 10 ? "0" + month : month;
        let day = date.getDay();
        day = day < 10 ? "0" + day : day;

        let hours = date.getHours();
        hours = hours < 10 ? "0" + hours: hours;
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? "0" + minutes : minutes;

        let info = await transporter.sendMail({
            from: `"Server" <${process.env.depaby_nodemailer_SERVER}>`,
            to: receivers.join(", "),
            subject: 'Заявка на поставку',
            html: html,
            text: 'Заявка на поставку"',
            attachments: [
                {
                    filename: `Заявка_${req.body.company}_${req.body.contact}_${year}-${month}-${day}_${hours}-${minutes}.csv`,
                    content: text,
                },
            ],
        });

        console.log("Message sent: %s", info.messageId);
        // = = = = = = = = конец функции

        res.status(200).send({
            code: 200,
            message: "messege sent with success",
        });
    }
    catch (error) {
        console.log(error);
        res.status(418).send({
            code: 418,
            message: "" + error,
        });
    }
});

module.exports = router;
