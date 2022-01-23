import { useEffect, useState } from "react";

import pages from "../../../pages";
import FetchReadDocuments from "../../../scripts/AbstractFetchRead/FetchReadDocuments";
import FetchReadProducts from "../../../scripts/AbstractFetchRead/FetchReadProducts";
import download_file from "../../../scripts/download_file";

function Sitemap(props) {
    const [pagesArray, setPagesArray] = useState([]);

    useEffect(function () {
        async function constructor() {
            let arr = [];

            pages.forEach(function (value, index) {
                if (value.onMenu === true) {
                    arr.push(`https://de-pa.by${value.href}`);
                }
            });

            const class_instance_products = new FetchReadProducts();
            const products = await class_instance_products.read();
            // console.log(products);
            products.forEach(function (value, index) {
                arr.push(`https://de-pa.by/products/${value.depaby_category}/${value.depaby_model}`);
            });

            const class_instance_documents = new FetchReadDocuments();
            const documents = await class_instance_documents.read();
            // console.log(documents);
            documents.forEach(function (value, index) {
                arr.push(`${value.depaby_href}`);
            });
       

            setPagesArray(arr);
        }
        constructor();
    }, [props]);

    function download_sitemap() {
        let text = "";
        text += `
<?xml version="1.0" encoding="UTF-8"?>

<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>
`;

        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        let day = date.getDate();
        day = day < 10 ? "0" + day : day;

        pagesArray.forEach(function (value, index) {
            text += `
    <url>
        <loc>${value}</loc>
        <lastmod>${year}-${month}-${day}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.5</priority>
    </url>            
`;
        });

        text += `
</urlset>
`;
        const class_instance = new download_file();
        class_instance.download_file(text, "sitemap.xml");
    }

    return (
        <div className="container">
            <h1>Карта сайта</h1>
            <p>
                <button onClick={download_sitemap}>Скачать sitemap.xml</button>
            </p>
            <p>Количество: {pagesArray.length}</p>
            <p>Список страниц:</p>
            <ul>
                {
                    pagesArray.map(function (value, index) {
                        return (
                            <li key={index}>
                                <a href={value}>{value}</a>
                            </li>
                        );
                    })
                }
            </ul>
            <p>Количество: {pagesArray.length}</p>
        </div>
    )
}

export default Sitemap;
