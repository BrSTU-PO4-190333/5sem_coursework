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

        // = = = = = = = = Для CSV файла/Для html сообщения
        let csvArray = [];
        let html = '';

        // = = = = = = = = CSV/HTML шапка письма
        csvArray.push([]);
        csvArray.push([
            'Организация:',
            req.body.company
        ]);
        csvArray.push([
            'Контактное лицо:',
            req.body.contact
        ]);
        csvArray.push([
            'E-mail:',
            req.body.email
        ]);
        csvArray.push([
            'Телефон:',
            req.body.phone
        ]);
        csvArray.push([
            'Адрес:',
            req.body.address
        ]);
        csvArray.push([]);
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

        // = = = = = = = = CSV/HTML таблица с заказом (шапка таблицы)
        csvArray.push([
            "№",
            "Картинка",
            "Модель",
            "Наименование",
            "Цена за 1 шт. без НДС (BYN)",
            "Количество (штуки)",
            "Общая цена (BYN)",
        ]);
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
        // = = = = = = = = CSV/HTML таблица с заказом (тело таблицы)
        req.body.array.forEach(function(value, index) {
            csvArray.push([
                index + 1,
                value.depaby_img_href,
                value.depaby_model,
                value.depaby_name,
                value.depaby_cost_byn,
                value.count,
                value.product_sum,
            ]);
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

        // = = = = = = = = CSV/HTML таблица с заказом (подвал таблицы)
        csvArray.push([
            "",
            "",
            "",
            "",
            "",
            "",
            `${req.body.sum} BYN`,
        ]);
        csvArray.push([]);
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

        // = = = = = = = = CSV/HTML конец письма
        csvArray.push([
            "Итого:",
            `${req.body.sum} BYN`,
        ]);
        html += `
<table>
    <tr>
        <td>Итого:</td>
        <td style="font-weight: bolder;">${req.body.sum} BYN</td>
    </tr>
</table>
`; 
        let tsv_text = '';
        csvArray.forEach(function(value, index) {
            tsv_text += value.join('\t');
            tsv_text += '\n';
        });
        console.log(tsv_text);
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
                    filename: `Заявка_${req.body.company}_${req.body.contact}_${year}-${month}-${day}_${hours}-${minutes}.tsv.csv`,
                    content: tsv_text,
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
