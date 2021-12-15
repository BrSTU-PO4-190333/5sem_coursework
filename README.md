## PDF files

- [ТЕХНИЧЕСКОЕ ЗАДАНИЕ](https://github.com/Pavel-Innokentevich-Galanin/gpi_coursework5/raw/pdf/gpi_coursework4_tz.pdf)
- [ПОЯСНИТЕЛЬНАЯ ЗАПИСКА](https://github.com/Pavel-Innokentevich-Galanin/gpi_coursework5/raw/pdf/gpi_coursework4_pz.pdf)
- [ПРИЛОЖЕНИЕ А - СХЕМА ПРОГРАММЫ](https://github.com/Pavel-Innokentevich-Galanin/gpi_coursework5/raw/pdf/gpi_coursework4_a.pdf)
- [ПРИЛОЖЕНИЕ А - СХЕМА ПРОГРАММЫ (A3)](https://github.com/Pavel-Innokentevich-Galanin/gpi_coursework5/raw/pdf/gpi_coursework4_a_programPlan.pdf)
- [ПРИЛОЖЕНИЕ Б - ТЕКСТ ПРОГРАММЫ](https://github.com/Pavel-Innokentevich-Galanin/gpi_coursework5/raw/pdf/gpi_coursework4_b.pdf)

---

## Project tree

```
tree --charset ascii -I node_module
```

```
.
|-- gpi_b   # Backend API: Node JS Express
|-- gpi_d   # JSON
|-- gpi_fa  # Frontend adminpanel: React JS
|-- gpi_fs  # Frontend webstore: React JS
|-- gpi_m   # MySQL: Docker, docker-compose, LAMP
`-- gpi_p   # PDF: docker-compose, LaTeX (texlive)
```

## Commands

| Command      | Description                                |
| ------------ | ------------------------------------------ |
|`make gpi_wi` | cmd: installing packages                   |
|`make gpi_wc` | cmd: copying settings files (env)          |
|`make gpi_wb` | cmd: Starting the server that returns JSON |
|`make gpi_wfa`| cmd: Launching the admin site              |
|`make gpi_wfs`| cmd: Launching the store's website         |
|`make gpi_wm` | cmd: starting the database                 |
|`make gpi_wt` | cmd: launching a PDF compilation           |

## Links

| URL                   | Description                               |
| --------------------- | ----------------------------------------- |
| http://localhost:8000 | phpMyAdmin (database)                     |
| http://localhost:8001 | ~~Apache PHP~~                            |
| http://localhost:3001 | Express server (server that returns JSON) |
| http://localhost:8003 | React (admin site)                        |
| http://localhost:8002 | React (store's website)                   |
