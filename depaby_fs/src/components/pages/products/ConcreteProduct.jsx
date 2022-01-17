import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import FetchReadProducts from "../../../scripts/AbstractFetchRead/FetchReadProducts";
import FetchReadProductCategories from "../../../scripts/AbstractFetchRead/FetchReadProductCategories";

function ConcreteProduct() {
    const { productCategory } = useParams();
    const [ categoryObject, setCategoryObject ] = useState({});
    const [ productsArray, setProductsArray] = useState([]);

    useEffect(function() {
        console.log(productCategory);
        readCategory();
        readProducts();
    }, [productCategory]);

    async function readCategory() {
        const class_istance = new FetchReadProductCategories();
        const response = await class_istance.read({
            category: productCategory,
        });

        if (response[0]) {
            setCategoryObject(response[0]);
            return;
        }
       
        setCategoryObject({});
    }

    async function readProducts() {
        const class_istance = new FetchReadProducts();
        const response = await class_istance.read({
            category: productCategory,
        });

        setProductsArray(response);
    }

    return (
        <div className="container">
            <h1>{categoryObject.depaby_caption}</h1>
            <div>
                {
                    productsArray.map(function (value, index) {
                        return (
                            <div key={index}>
                                {value.depaby_name}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ConcreteProduct;
