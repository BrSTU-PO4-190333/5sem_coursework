## Документация

<table>
    <caption><b>Таблица - Описание модулей</b></caption>
    <thead>
        <tr>
            <td>Путь</td>
            <td>Команда Makefile</td>
            <td>URL</td>
            <td>Описание</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2"><a href="Makefile">Makefile</a></td>
            <td>make gpi_wi</td>
            <td rowspan="2">-</td>
            <td>Команда копирует файлы настроек .env и устанавливает пакеты npm</td>
        </tr>
        <tr>
            <td>make gpi_wc</td>
            <td>Команда копирует файлы настроек .env</td>
        </tr>
        <tr>
            <td><a href="gpi_ba">gpi_ba</a></td>
            <td>make gpi_wba</td>
            <td>http://localhost:3000</td>
            <td>ba - backend API: Node JS Express server (сервер возвращает JSON данные из базы данных)</td>
        </tr>
        <tr>
            <td rowspan="2"><a href="gpi_bm">gpi_bm</a></td>
            <td rowspan="2">make gpi_wbm</td>
            <td>http://localhost:8000</td>
            <td>bm - backend MySQL: phpMyAdmin (удобный просмотр таблиц базы данных MySQL)</td>
        </tr>
        <tr>
            <td>http://localhost:8001</td>
            <td>bm - backend MySQL: Apache PHP (по сути не нуженый сайт на PHP, но шёл вместе с LAMP через Docker, и нужен для работы phpMyAdmin)</td>
        </tr>
        <tr>
            <td><a href="gpi_dp">gpi_dp</a></td>
            <td>make gpi_wdp</td>
            <td>-</td>
            <td>dp - documantation PDF: LaTeX (PDF файлы с рамкой по ЕСКД и ГОСТ)</td>
        </tr>
        <tr>
            <td><a href="gpi_ds">gpi_ds</a></td>
            <td>make gpi_wds</td>
            <td>http://localhost:3001</td>
            <td>ds - documentation Swagger: React JS (удобный сайт, который документально показывает GET и POST запросы)</td>
        </tr>
        <tr>
            <td><a href="gpi_fa">gpi_fa</a></td>
            <td>make gpi_wfa</td>
            <td>http://localhost:3002</td>
            <td>fa - frontend adminpanel: React JS (сайт админка)</td>
        </tr>
        <tr>
            <td><a href="gpi_fs">gpi_fs</a></td>
            <td>make gpi_wfs</td>
            <td>http://localhost:3003</td>
            <td>fs - frontend store: React JS (сайт магазин)</td>
        </tr>
        <tr>
            <td rowspan="6"><a href="gpi_fs">gpi_gp</a></td>
            <td rowspan="6">make gpi_wgp</td>
            <td>http://localhost:8080</td>
            <td rowspan="2">gp - GitHub pages: npm (для загрузки demo на gh-pages)</td>
        </tr>
    </tbody>
</table>

## Глянуть курсовую работу онлайн

<table>
    <caption><b>Таблица - Демонстрация PDF файлов</b></caption>
    <thead>
        <tr>
            <td>Название документа</td>
            <td>Формат</td>
            <td>Ссылка на файл</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>ТЕХНИЧЕСКОЕ ЗАДАНИЕ</td>
            <td>А4 две стороны</td>
            <td>https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_tz.pdf</td>
        </tr>
        <tr>
            <td>ПОЯСНИТЕЛЬНАЯ ЗАПИСКА</td>
            <td>А4 одна сторона</td>
            <td>https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_pz.pdf</td>
        </tr>
        <tr>
            <td rowspan="2">ПРИЛОЖЕНИЕ А - СХЕМА ПРОГРАММЫ</td>
            <td>А4 одна сторона</td>
            <td>https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_a.pdf</td>
        </tr>
        <tr>
            <td>А3 одна сторона</td>
            <td>https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_a_programPlan.pdf</td>
        </tr>
        <tr>
            <td>ПРИЛОЖЕНИЕ Б - ТЕКСТ ПРОГРАММЫ</td>
            <td>А4 одна сторона</td>
            <td>https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_b.pdf</td>
        </tr>
    </tbody>
</table>

> На GitHub pages нельзя поднять Node JS сервер и MySQL.
> 
> Поэтому, для корректной работы демонстрации на gh-pages нужно запустить у себя модули `gpi_ba` и `gpi_bm`.

<table>
    <caption><b>Таблица - Демонстрация на GitHub pages</b></caption>
    <thead>
        <tr>
            <td>Модуль</td>
            <td>Ссылка</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>gpi_ds</td>
            <td>https://Pavel-Innokentevich-Galanin.github.io/gpi_4coursework/gpi_ds/</td>
        </tr>
        <tr>
            <td>gpi_fa</td>
            <td>https://Pavel-Innokentevich-Galanin.github.io/gpi_4coursework/gpi_fa/</td>
        </tr>
        <tr>
            <td>gpi_fs</td>
            <td>https://Pavel-Innokentevich-Galanin.github.io/gpi_4coursework/gpi_fs/</td>
        </tr>
    </tbody>
</table>
