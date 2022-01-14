## Документация

- `ba` - backend api
- `bm` - backend mysql
- `dp` - documentation postman
- `dl` - documentation latex
- `ds` - documentation swagger
- `fa` - frontend adminpanel
- `fs` - frontend store
- `gp` - github pages

| Команда cmd       | Команда bash      | Что делает                                                 |
| ----------------- | ----------------- | ---------------------------------------------------------- |
| `make depaby_cmi` | `make depaby_bmi` | Копирует .env.txt файлы в .env, и устанавливает npm пакеты |
| `make depaby_cmc` | `make depaby_bmc` | Копирует .env.txt файлы в .env                             |
| `make depaby_cba` | `make depaby_bba` | Запускает Node JS server                                   |
| `make depaby_cbm` | `make depaby_bbm` | Запускает LAMP: phpMyAdmin и MySQL                         |
|                   |                   | Запускает LAMP: Apache PHP                                 |
| `make depaby_cfs` | `make depaby_bfs` | Запускает React JS магазин                                 |

| Модуль    | URL                   |
| --------- | --------------------- |
| depaby_ba | http://localhost:3000 |
| depaby_bm | http://localhost:8000 |
|           | http://localhost:8001 |
| depaby_fs | http://localhost:5000 |

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
