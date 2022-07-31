class ObjectProduct {
    constructor(obj = {}) {
        this.set_model   (obj.depaby_model);
        this.set_name    (obj.depaby_name);
        this.set_img_href(obj.depaby_img_href);
        this.set_company (obj.depaby_company);
        this.set_category(obj.depaby_category);
        this.set_on_box  (obj.depaby_on_box);
        this.set_cost_byn(obj.depaby_cost_byn);
        this.set_kg      (obj.depaby_kg);
        this.set_m3      (obj.depaby_m3);
    }

    get() {
        return {
            depaby_model: this.model,
            depaby_name: this.name,
            depaby_img_href: this.img_href,
            depaby_company: this.company,
            depaby_category: this.category,
            depaby_on_box: this.on_box,
            depaby_cost_byn: this.cost_byn,
            depaby_kg: this.kg,
            depaby_m3: this.m3,
        };
    }

    static get_keys() {
        return [
            "depaby_model",
            "depaby_name",
            "depaby_img_href",
            "depaby_company",
            "depaby_category",
            "depaby_on_box",
            "depaby_cost_byn",
            "depaby_kg",
            "depaby_m3",
        ];
    }

    get_values() {
        return [
            this.model,
            this.name,
            this.img_href,
            this.company,
            this.category,
            this.on_box,
            this.cost_byn,
            this.kg,
            this.m3,
        ];
    }

    set_model(model) {
        if (typeof model != "string") {
            model = "SomeModel";
        }
        this.model = model;
    }

    set_name(name) {
        if (typeof name != "string") {
            name = "SomeName";
        }
        this.name = name;
    }

    set_img_href(img_href) {
        if (typeof img_href != "string") {
            img_href = "somePath";
        }
        this.img_href = img_href;
    }

    set_company(company) {
        if (typeof company != "string") {
            company = "SomeCompany";
        }
        this.company = company;
    }

    set_category(category) {
        if (typeof category != "string") {
            category = "SomeCategory";
        }
        this.category = category;
    }

    set_on_box(on_box) {
        on_box = Number(on_box);
        if(Number.isFinite(on_box) == false) {
            on_box = 0;
        }
        this.on_box = on_box;
    }

    set_cost_byn(cost_byn) {
        cost_byn = Number(cost_byn);
        if(Number.isFinite(cost_byn) == false) {
            cost_byn = 0;
        }
        this.cost_byn = cost_byn;
    }

    set_kg(kg) {
        kg = Number(kg);
        if(Number.isFinite(kg) == false) {
            kg = 0;
        }
        this.kg = kg;
    }

    set_m3(m3) {
        m3 = Number(m3);
        if(Number.isFinite(m3) == false) {
            m3 = 0;
        }
        this.m3 = m3;
    }
}

module.exports = ObjectProduct;
