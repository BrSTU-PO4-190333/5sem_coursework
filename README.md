## PDF files

- [ТЕХНИЧЕСКОЕ ЗАДАНИЕ](https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_tz.pdf)
- [ПОЯСНИТЕЛЬНАЯ ЗАПИСКА](https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_pz.pdf)
- [ПРИЛОЖЕНИЕ А - СХЕМА ПРОГРАММЫ](https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_a.pdf)
- [ПРИЛОЖЕНИЕ А - СХЕМА ПРОГРАММЫ (A3)](https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_a_programPlan.pdf)
- [ПРИЛОЖЕНИЕ Б - ТЕКСТ ПРОГРАММЫ](https://github.com/Pavel-Innokentevich-Galanin/gpi_4coursework/raw/pdf/gpi_4coursework_b.pdf)

## Documentation

<table>
    <thead>
        <tr>
            <td>Path</td>
            <td>Command</td>
            <td>URL</td>
            <td>Description</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2"><a href="Makefile">Makefile</a></td>
            <td>make gpi_wi</td>
            <td rowspan="2">-</td>
            <td>Init: Copy .env files and install all npm packages</td>
        </tr>
        <tr>
            <td>make gpi_wi</td>
            <td>Init: Copy .env files and install all npm packages</td>
        </tr>
        <tr>
            <td><a href="gpi_ba">gpi_ba</a></td>
            <td>make gpi_wba</td>
            <td>http://localhost:3000</td>
            <td>Backend API: Node JS Express server (server that returns JSON)</td>
        </tr>
        <tr>
            <td rowspan="2"><a href="gpi_bm">gpi_bm</a></td>
            <td rowspan="2">make gpi_wbm</td>
            <td>http://localhost:8000</td>
            <td>Backend MySQL: phpMyAdmin (view database)</td>
        </tr>
        <tr>
            <td>http://localhost:8001</td>
            <td>Backend MySQL: Apache PHP (for work phpMyAdmin)</td>
        </tr>
        <tr>
            <td><a href="gpi_ds">gpi_ds</a></td>
            <td>make gpi_wds</td>
            <td>http://localhost:3001</td>
            <td>Documentation swagger: React JS (information about API)</td>
        </tr>
        <tr>
            <td><a href="gpi_fa">gpi_fa</a></td>
            <td>make gpi_wfa</td>
            <td>http://localhost:3002</td>
            <td>Frontend: React JS (adminpanel website)</td>
        </tr>
        <tr>
            <td><a href="gpi_fs">gpi_fs</a></td>
            <td>make gpi_wfs</td>
            <td>http://localhost:3003</td>
            <td>Frontend: React JS (store's website)</td>
        </tr>
        <tr>
            <td><a href="gpi_p">gpi_p</a></td>
            <td>make gpi_wp</td>
            <td>http://localhost:3003</td>
            <td>Documantation: Compile ESKD PDF file (coursework)</td>
        </tr>
    </tbody>
</table>
