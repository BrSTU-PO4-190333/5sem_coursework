import { useEffect, useState } from "react";

import pages from "../../../pages";
import FetchReadProductCategories from "../../../scripts/AbstractFetchRead/FetchReadProductCategories";
import FetchReadProducts from "../../../scripts/AbstractFetchRead/FetchReadProducts";
import FetchReadDocuments from "../../../scripts/AbstractFetchRead/FetchReadDocuments";
import download_file from "../../../scripts/download_file";

function Sitemap(props) {
    const [pagesArray, setPagesArray] = useState([]);

    useEffect(function () {
        async function constructor() {
            let arr = [];
            arr = arr.concat(get_Routes_pages());
            arr = arr.concat(await get_Products_pages());
            arr = arr.concat(await get_ProductCategories_pages());
            arr = arr.concat(await get_Documents_pages());

            setPagesArray(arr);
        }
        constructor();
    }, [props]);

    function download_sitemap() {
        let text = "";
        text += `<?xml version="1.0" encoding="UTF-8"?>
<urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
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
        <loc>${value.href}</loc>
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
            <p>Количество страниц: {pagesArray.length}</p>
            <p>Список страниц:</p>
            <ul>
                {
                    pagesArray.map(function (value, index) {
                        return (
                            <li key={index}>
                                <a href={value.href}>{value.caption}</a>
                            </li>
                        );
                    })
                }
            </ul>
            <p>Количество страниц: {pagesArray.length}</p>
        </div>
    )
}

function get_Routes_pages() {
    let arr = [];
    pages.forEach(function (value, index) {
        if (value.onMenu === true) {
            arr.push({
                caption: value.caption,
                href: `https://de-pa.by${value.href}`,
            });
        }
    });
    return arr;
}

async function get_Products_pages() {
    let arr = [];
    const class_instance = new FetchReadProductCategories();
    const response = await class_instance.read();
    response.forEach(function (value, index) {
        arr.push({
            caption: value.depaby_caption,
            href: `https://de-pa.by/products/${value.depaby_product_category}`,
        });
    });
    return arr;
}

async function get_ProductCategories_pages() {
    let arr = [];
    const class_instance = new FetchReadProducts();
    const response = await class_instance.read();
    response.forEach(function (value, index) {
        arr.push({
            caption: value.depaby_name,
            href: `https://de-pa.by/products/${value.depaby_category}/${value.depaby_model}`,
        });
    });
    return arr;
}

async function get_Documents_pages() {
    let arr = [];
    const class_instance = new FetchReadDocuments();
    const response = await class_instance.read();
    response.forEach(function (value, index) {
        arr.push({
            caption: value.depaby_caption,
            href: value.depaby_href,
        });
    });
    return arr;
}

export default Sitemap;
