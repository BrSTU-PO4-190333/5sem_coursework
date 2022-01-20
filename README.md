## Расшифровка сокращений модулей

- `depaby_ba` - backend api (Node JS express сервер, который возвращает JSON и работает с MySQL)
- `depaby_bm` - backend mysql (База данных MySQL через Docker)
- `depaby_fa` - frontend adminpanel (React JS админка)
- `depaby_fs` - frontend store (React JS сайт клиенту)
- `depaby_gh_pages` - npm скрипт для залития проектов на github pages
- `depaby_postman` - открыть запросы CRUD через программу Postman
- `gpi_latex` - курсовая с рамкой

## Запуск модулей

| Команда cmd       | Команда bash      | Что делает                                                 |
| ----------------- | ----------------- | ---------------------------------------------------------- |
| `make depaby_cmi` | `make depaby_bmi` | Копирует .env.txt файлы в .env, и устанавливает npm пакеты |
| `make depaby_cmc` | `make depaby_bmc` | Копирует .env.txt файлы в .env                             |
| `make depaby_cgh` | `make depaby_bgh` | Заливаем проекты на GitHub pages                           |

| Команда cmd       | Команда bash      | Что делает                                                 |
| ----------------- | ----------------- | ---------------------------------------------------------- |
| `make depaby_cba` | `make depaby_bba` | Запускает Node JS server                                   |
|                   |                   | Запускает документацию Swagger                             |
| `make depaby_cbm` | `make depaby_bbm` | Запускает LAMP: phpMyAdmin                                 |
|                   |                   | Запускает LAMP: MySQL                                      |
| `make depaby_cfa` | `make depaby_bfa` | Запускает React JS админку                                 |
| `make depaby_cfs` | `make depaby_bfs` | Запускает React JS магазин                                 |

## Порты модулей
| Модуль    | URL                        | Что        |
| --------- | -------------------------- | ---------- |
| depaby_ba | http://localhost:3000      | Node JS    |
|           | http://localhost:3000/docs | Swagger    |
| depaby_bm | http://localhost:3080      | phpMyAdmin |
|           | http://localhost:3306      | MySQL      |
| depaby_fa | http://localhost:4000      | React JS   |
| depaby_fs | http://localhost:5000      | React JS   |
