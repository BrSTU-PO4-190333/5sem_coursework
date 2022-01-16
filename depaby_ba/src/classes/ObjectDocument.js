class ObjectProduct {
    constructor(obj = {}) {
        this.set_depaby_caption        (obj.depaby_caption);
        this.set_depaby_href           (obj.depaby_href);
        this.set_depaby_page_category  (obj.depaby_page_category);
    }

    get() {
        return {
            depaby_caption: this.depaby_caption,
            depaby_href: this.depaby_href,
            depaby_page_category: this.depaby_page_category,
        };
    }

    static get_keys() {
        return [
            "depaby_caption",
            "depaby_href",
            "depaby_page_category",
        ];
    }

    get_values() {
        return [
            this.depaby_caption,
            this.depaby_href,
            this.depaby_page_category,
        ];
    }

    set_depaby_caption(depaby_caption) {
        if (typeof depaby_caption != "string") {
            depaby_caption = "someDocName";
        }
        this.depaby_caption = depaby_caption;
    }

    set_depaby_href(depaby_href) {
        if (typeof depaby_href != "string") {
            depaby_href = "someUrlToDoc";
        }
        this.depaby_href = depaby_href;
    }

    set_depaby_page_category(depaby_page_category) {
        if (typeof depaby_page_category != "string") {
            depaby_page_category = "someCatalogsPage";
        }
        this.depaby_page_category = depaby_page_category;
    }
}

module.exports = ObjectProduct;
