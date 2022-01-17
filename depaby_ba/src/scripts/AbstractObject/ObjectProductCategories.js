class ObjectProductCategories {
    constructor(obj = {}) {
        this.set_depaby_caption             (obj.depaby_caption);
        this.set_depaby_product_category    (obj.depaby_product_category);
        this.set_depaby_img_href            (obj.depaby_img_href);
    }

    get() {
        return {
            depaby_caption:             this.depaby_caption,
            depaby_product_category:    this.depaby_product_category,
            depaby_img_href:            this.depaby_img_href,
        };
    }

    static get_keys() {
        return [
            "depaby_caption",
            "depaby_product_category",
            "depaby_img_href",
        ];
    }

    get_values() {
        return [
            this.depaby_caption,
            this.depaby_product_category,
            this.depaby_img_href,
        ];
    }

    set_depaby_caption(depaby_caption) {
        if (typeof depaby_caption != "string") {
            depaby_caption = "SomeCaption";
        }
        this.depaby_caption = depaby_caption;
    }

    set_depaby_product_category(depaby_product_category) {
        if (typeof depaby_product_category != "string") {
            depaby_product_category = "SomeProductCategory";
        }
        this.depaby_product_category = depaby_product_category;
    }

    set_depaby_img_href(depaby_img_href) {
        if (typeof depaby_img_href != "string") {
            depaby_img_href = "somePath";
        }
        this.depaby_img_href = depaby_img_href;
    }
}

module.exports = ObjectProductCategories;
