<p align="center">
  <img height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/latex/latex.png" alt="" />
  <img height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="" />
  <img height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" alt="" />
  <img height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png" alt="" />
  <img height="100" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png" alt="" />
</p>

Menu:

- [Task](#task)
- [How to run app](#how-to-run-app)
- [Application stack](#application-stack)
- [Project tree](#project-tree)

## Task

Write coursework.

## How to run app

```bash
make tex # tex to pdf
```

## Application stack

- [vs code][vs_code]
- [sumatra PDF][sumatra_pdf]
- [vs code PDF][vs_code_pdf]
- [vs code matherial icon theme][vs_code_material_icon_theme]
- [docker-compose][docker]
- [make][make]
- nodejs
- firefox

## Project tree

```bash
sudo apt install tree
tree --charset ascii -a -I ".git|docker|*.drawio.bkp|*.drawio.dtmp|*.pdf" > README.tree.txt
```

[View project tree](README.tree.txt)

<!-- = = = = = = = = = = = = = = = = -->

[vs_code]: https://code.visualstudio.com/#alt-downloads
[sumatra_pdf]: https://www.sumatrapdfreader.org/free-pdf-reader
[vs_code_pdf]: https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf
[vs_code_material_icon_theme]: https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme
[docker]: https://www.docker.com/get-started/
[make]: https://stackoverflow.com/questions/32127524/how-to-install-and-use-make-in-windows#comments-32127632

<!-- = = = = = = = = = = = = = = = = -->
<!-- = = = = = = = = = = = = = = = = -->
<!-- = = = = = = = = = = = = = = = = -->

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
