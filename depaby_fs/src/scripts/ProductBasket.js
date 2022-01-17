class ProductBasket
{
    static read() {
        let str = localStorage.getItem("depaby_products_basket");
        if (str == null) {
            return {};
        }

        let object = JSON.parse(str);
        return object;
    }

    static delete(model = '') {
        let str = localStorage.getItem("depaby_products_basket");
        if (str == null) {
            return
        }

        let object = JSON.parse(str);
        delete object[model];

        str = JSON.stringify(object);
        localStorage.setItem("depaby_products_basket", str);
    }

    static plus(model) {
        let str = localStorage.getItem("depaby_products_basket");
        if (str == null) {
            localStorage.setItem("depaby_products_basket", `{ "${model}": 1 }`);
            return;
        }

        let object = JSON.parse(str);
        if (object[model]) {
            object[model] += 1;
        }
        else {
            object[model] = 1;
        }

        str = JSON.stringify(object);
        localStorage.setItem("depaby_products_basket", str);
    }

    static minus(model) {
        let str = localStorage.getItem("depaby_products_basket");
        if (str == null) {
            return;
        }

        let object = JSON.parse(str);
        
        if (object[model] === undefined) {
            return;
        }

        if (object[model] - 1 <= 0) {
            delete object[model];
        }
        else {
            object[model] -= 1;
        }

        str = JSON.stringify(object);
        localStorage.setItem("depaby_products_basket", str);
    }

    static getCount(model) {
        let str = localStorage.getItem("depaby_products_basket");
        if (str == null) {
            return 0;
        }

        let object = JSON.parse(str);
        if (object[model]) {
            return object[model];
        }

        return 0;
    }
}

export default ProductBasket;
