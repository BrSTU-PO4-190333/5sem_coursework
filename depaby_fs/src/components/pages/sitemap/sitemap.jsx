import { useEffect, useState } from "react";

import pages from "../../../pages";
import FetchReadProductCategories from "../../../scripts/AbstractFetchRead/FetchReadProductCategories";
import FetchReadProducts from "../../../scripts/AbstractFetchRead/FetchReadProducts";
import FetchReadDocuments from "../../../scripts/AbstractFetchRead/FetchReadDocuments";
import download_file from "../../../scripts/download_file";

function Sitemap(props) {
    const [pagesArray, setPagesArray] = useState([]);
    const [pagesDict, setPagesDict] = useState({});

    useEffect(function () {
        async function constructor() {
            let arr = [
                {
                    caption: 'Главная',
                    href: 'https://de-pa.by/',
                },
            ];
            arr = arr.concat(get_Routes_pages());
            arr = arr.concat(await get_Products_pages());
            arr = arr.concat(await get_ProductCategories_pages());
            arr = arr.concat(await get_Documents_pages());
            // console.log(arr);

            setPagesArray(arr);
            setPagesDict(get_dict_pages(arr));
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
            <p>Количество страниц: {pagesArray.length}</p>
            <p><button onClick={download_sitemap}>Скачать sitemap.xml</button></p>
            <ul><SitemapLi dict={pagesDict} /></ul>
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

function get_dict_pages(arr) {
    let s = [];
    arr.forEach(function (value, index) {
        s.push(value.href.split("/"));
    });
    // console.log(s);

    let pages_dict = {};
    s.forEach(function(value, index) {
        if (value.length === 4 && value[2] === 'de-pa.by') {
            pages_dict[value[3]] = {
                caption: arr[index].caption,
                hash: `/${value[3]}`,
                href: arr[index].href,
                pages: {},
            }
        }
    });
    s.forEach(function(value, index) {
        if (value.length === 5 && value[2] === 'de-pa.by') {
            if (!pages_dict[value[3]]) {
                pages_dict[value[3]] = {
                    caption: value[3],
                    // href: `${value[0]}/${value[1]}/${value[2]}/${value[3]}`,
                    pages: {},
                }
            }
            pages_dict[value[3]].pages[value[4]] = {
                caption: arr[index].caption,
                hash: `/${value[4]}`,
                href: arr[index].href,
                pages: {},
            }
        }
    });
    s.forEach(function(value, index) {
        if (value.length === 6 && value[2] === 'de-pa.by') {
            if (!pages_dict[value[3]]) {
                pages_dict[value[3]] = {
                    caption: value[3],
                    // href: `${value[0]}/${value[1]}/${value[2]}/${value[3]}`,
                    pages: {},
                }
            }
            if (!pages_dict[value[3]].pages[value[4]]) {
                pages_dict[value[3]].pages[value[4]] = {
                    caption: value[4],
                    // href: `${value[0]}/${value[1]}/${value[2]}/${value[3]}/${value[4]}`,
                    pages: {},
                }
            }
            pages_dict[value[3]].pages[value[4]].pages[value[5]] = {
                caption: arr[index].caption,
                hash: `/${value[5]}`,
                href: arr[index].href,
                pages: {},
            }
        }
    });
    // console.log(pages_dict);
    return pages_dict;
}

function SitemapLi(props) {
    return props.dict ? Object.keys(props.dict).map(function(key, index) {
        return (
            <li key={`${index} ${props.dict[key].href}`}>
                <span>{props.dict[key].hash} </span>
                <a href={props.dict[key].href}>{props.dict[key].caption}</a>
                <ul>
                    <SitemapLi dict={props.dict[key].pages} />
                </ul>
            </li>
        );
    }) : (
        <li>Err</li>
    )
}

export default Sitemap;
