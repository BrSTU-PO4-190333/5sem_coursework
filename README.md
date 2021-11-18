## PDF files

- [Пояснительная записка](https://github.com/Pavel-Innokentevich-Galanin/gpi_coursework5/raw/pdf/gpi_coursework4_pz.pdf)
- [Приложение А](https://github.com/Pavel-Innokentevich-Galanin/gpi_coursework5/raw/pdf/gpi_coursework4_a.pdf)
- [Приложение А (Схема программы)](https://github.com/Pavel-Innokentevich-Galanin/gpi_coursework5/raw/pdf/gpi_coursework4_a_programPlan.pdf)
- [Приложение Б](https://github.com/Pavel-Innokentevich-Galanin/gpi_coursework5/raw/pdf/gpi_coursework4_b.pdf)

---

## Installing packages

```bash
make gpi_install
```

## Project start

### 1st terminal for MySQL (LAMP)

```bash
make gpi_run-lamp-mysql
```

- http://localhost:8000 - phpMyAdmin
- ~~http://localhost:8001 - Apache PHP~~

### 2nd terminal for API (NodeJS Express)

```
make gpi_run-backend-api
```

- http://localhost:3001 - Express

### 3rd terminal for admin panel (NodeJS React)

```bash
make gpi_run-frontend-adminpanel
```

- http://localhost:3003 - React

### 4th terminal for webstore (NodeJS React)

```bash
make gpi_run-frontend-webstore
```

- http://localhost:3002 - React

## Make PDF

```bash
make gpi_run-texlive-docker
```
