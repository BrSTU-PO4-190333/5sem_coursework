## Расшифровка сокращений модулей

- `depaby_ba` - backend api (Node JS express сервер, который возвращает JSON и работает с MySQL)
- `depaby_bm` - backend mysql (База данных MySQL через Docker)
- `depaby_dj` - documentation json (пример JSON файла для загрузки в админ панель)
- `depaby_dp` - documentation postman (открыть запросы CRUD через программу Postman)
- `depaby_fa` - frontend adminpanel (React JS админка)
- `depaby_fs` - frontend store (React JS сайт клиенту)
- ~~`gpi_dp`~~ `gpi_dl` - documentation latex (курсовая с рамкой)

## Запуск модулей
| Команда cmd       | Команда bash      | Что делает                                                 |
| ----------------- | ----------------- | ---------------------------------------------------------- |
| `make depaby_cmi` | `make depaby_bmi` | Копирует .env.txt файлы в .env, и устанавливает npm пакеты |
| `make depaby_cmc` | `make depaby_bmc` | Копирует .env.txt файлы в .env                             |
| `make depaby_cba` | `make depaby_bba` | Запускает Node JS server                                   |
|                   |                   | Запускает документацию Swagger                             |
| `make depaby_cbm` | `make depaby_bbm` | Запускает LAMP: phpMyAdmin                                 |
|                   |                   | Запускает LAMP: Apache PHP                                 |
|                   |                   | Запускает LAMP: MySQL                                      |
| `make depaby_cfa` | `make depaby_bfa` | Запускает React JS админку                                 |
| `make depaby_cfs` | `make depaby_bfs` | Запускает React JS магазин                                 |

## Порты модулей
| Модуль    | URL                        |
| --------- | -------------------------- |
| depaby_ba | http://localhost:3000      |
|           | http://localhost:3000/docs |
| depaby_bm | http://localhost:3080      |
|           | http://localhost:3081      |
|           | http://localhost:3306      |
| depaby_fa | http://localhost:4000      |
| depaby_fs | http://localhost:5000      |
