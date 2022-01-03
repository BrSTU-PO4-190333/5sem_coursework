## PDF files

- [ТЕХНИЧЕСКОЕ ЗАДАНИЕ](https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_tz.pdf)
- [ПОЯСНИТЕЛЬНАЯ ЗАПИСКА](https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_pz.pdf)
- [ПРИЛОЖЕНИЕ А - СХЕМА ПРОГРАММЫ](https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_a.pdf)
- [ПРИЛОЖЕНИЕ А - СХЕМА ПРОГРАММЫ (A3)](https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_a_programPlan.pdf)
- [ПРИЛОЖЕНИЕ Б - ТЕКСТ ПРОГРАММЫ](https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_b.pdf)

## Documentation

| Path                 | Command         | URL                     | Description                                                |
| -------------------- | --------------- | ----------------------- | ---------------------------------------------------------- |
| [Makefile](Makefile) | `make gpi_wi`   |                         | Init: Copy `.env` files and install all npm packages       |
| [Makefile](Makefile) | `make gpi_wc`   |                         | Init: Copy `.env` files                                    |
| [gpi_b](gpi_b)       | `make gpi_wb`   | http://localhost:3000   | Backend: Node JS Express server (server that returns JSON) |
| [gpi_ds](gpi_ds)     | `make gpi_wds`  | http://localhost:3001   | Documentation: swagger (information about API)             |
| [gpi_fa](gpi_fa)     | `make gpi_wfa`  | http://localhost:3002   | Frontend: React JS (adminpanel website)                    |
| [gpi_fs](gpi_fs)     | `make gpi_wfs`  | http://localhost:3003   | Frontend: React JS (store's website)                       |
| [gpi_m](gpi_m)       | `make gpi_wm`   | http://localhost:8000   | LAMP: phpMyAdmin (view database)                           |
| ~~[gpi_m](gpi_m)~~   |~~`make gpi_wm`~~|~~http://localhost:8001~~| ~~LAMP: Apache PHP (for work phpMyAdmin)~~                 |
| [gpi_p](gpi_p)       | `make gpi_wp`   |                         | Documantation: Compile ESKD PDF file (coursework)          |
