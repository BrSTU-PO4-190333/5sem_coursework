## Документация

<table>
    <caption><b>Таблица - Описание модулей</b></caption>
    <thead>
        <tr>
            <td>Путь</td>
            <td>Команда Makefile</td>
            <td>URL</td>
            <td>Расшифровка</td>
            <td>Описание</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2"><a href="Makefile">Makefile</a></td>
            <td>make depaby_cmi<br>make depaby_bmi</td>
            <td rowspan="2">-</td>
            <td>cmd/bash make install</td>
            <td>Команда копирует файлы настроек .env и устанавливает пакеты npm</td>
        </tr>
        <tr>
            <td>make depaby_cmc<br>make depaby_bmc</td>
            <td>cmd/bash make copy</td>
            <td>Команда копирует файлы настроек .env</td>
        </tr>
        <tr>
            <td><a href="depaby_ba">depaby_ba</a></td>
            <td>make depaby_cba<br>make depaby_bba</td>
            <td>http://localhost:3000</td>
            <td>cmd/bash backend api</td>
            <td>Node JS Express server (сервер возвращает JSON данные из базы данных)</td>
        </tr>
        <tr>
            <td><a href="depaby_bm">depaby_bm</a></td>
            <td>make depaby_wbm<br>make depaby_bbm</td>
            <td>http://localhost:8000<br/>http://localhost:8001</td>
            <td>cmd/bash backend mysql</td>
            <td>phpMyAdmin (удобный просмотр таблиц базы данных MySQL)<br>Apache PHP (по сути не нуженый сайт на PHP, но шёл вместе с LAMP через Docker, и нужен для работы phpMyAdmin)</td>
        </tr>
        <tr>
            <td><a href="depaby_dp">depaby_dp</a></td>
            <td>-</td>
            <td>-</td>
            <td>documentation postman</td>
            <td>удобные запросы GET, POST, PUT, DELETE через програму</td>
        </tr>
        <tr>
            <td><a href="gpi_dp">gpi_dp</a></td>
            <td>make gpi_wdp</td>
            <td>-</td>
            <td>cmd/bash documentation latex</td>
            <td>LaTeX (PDF файлы с рамкой по ЕСКД и ГОСТ)</td>
        </tr>
        <tr>
            <td><a href="gpi_ds">gpi_ds</a></td>
            <td>make gpi_wds</td>
            <td>http://localhost:3001</td>
            <td>cmd/bash documentation swagger</td>
            <td>React JS (удобный сайт, который документально показывает GET и POST запросы)</td>
        </tr>
        <tr>
            <td><a href="gpi_fa">gpi_fa</a></td>
            <td>make gpi_wfa</td>
            <td>http://localhost:3002</td>
            <td>cmd/bash frontend adminpanel</td>
            <td>React JS (сайт админка)</td>
        </tr>
        <tr>
            <td><a href="gpi_fs">gpi_fs</a></td>
            <td>make gpi_wfs</td>
            <td>http://localhost:3003</td>
            <td>cmd/bash frontend store</td>
            <td>React JS (сайт магазин)</td>
        </tr>
        <tr>
            <td rowspan="6"><a href="gpi_fs">gpi_gp</a></td>
            <td rowspan="6">make gpi_wgp</td>
            <td>http://localhost:8080</td>
            <td>cmd/bash github pages</td>
            <td rowspan="2">npm (для загрузки demo на gh-pages)</td>
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
> Поэтому, для корректной работы демонстрации на gh-pages нужно запустить у себя модули `depaby_ba` и `depaby_bm`.

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
