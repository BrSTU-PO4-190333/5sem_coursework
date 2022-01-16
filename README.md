## Документация

- `ba` - backend api
- `bm` - backend mysql
- `dp` - documentation postman
- `dl` - documentation latex
- `fa` - frontend adminpanel
- `fs` - frontend store

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

| Модуль    | URL                        |
| --------- | -------------------------- |
| depaby_ba | http://localhost:3000      |
|           | http://localhost:3000/docs |
| depaby_bm | http://localhost:3080      |
|           | http://localhost:3081      |
|           | http://localhost:3306      |
| depaby_fa | http://localhost:4000      |
| depaby_fs | http://localhost:5000      |
