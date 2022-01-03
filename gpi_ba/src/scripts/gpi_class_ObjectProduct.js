class gpi_ObjectProduct {
    constructor(gpi_obj = {}) {
        this.gpi_set_model   (gpi_obj.gpi_model);
        this.gpi_set_name    (gpi_obj.gpi_name);
        this.gpi_set_img_path(gpi_obj.gpi_img_path);
        this.gpi_set_company (gpi_obj.gpi_company);
        this.gpi_set_category(gpi_obj.gpi_category);
        this.gpi_set_on_box  (gpi_obj.gpi_on_box);
        this.gpi_set_cost_byn(gpi_obj.gpi_cost_byn);
        this.gpi_set_kg      (gpi_obj.gpi_kg);
        this.gpi_set_m3      (gpi_obj.gpi_m3);
    }

    gpi_get() {
        return {
            gpi_model: this.gpi_model,
            gpi_name: this.gpi_name,
            gpi_img_path: this.gpi_img_path,
            gpi_company: this.gpi_company,
            gpi_category: this.gpi_category,
            gpi_on_box: this.gpi_on_box,
            gpi_cost_byn: this.gpi_cost_byn,
            gpi_kg: this.gpi_kg,
            gpi_m3: this.gpi_m3,
        };
    }

    static gpi_get_keys() {
        return [
            "gpi_model",
            "gpi_name",
            "gpi_img_path",
            "gpi_company",
            "gpi_category",
            "gpi_on_box",
            "gpi_cost_byn",
            "gpi_kg",
            "gpi_m3",
        ];
    }

    gpi_get_values() {
        return [
            this.gpi_model,
            this.gpi_name,
            this.gpi_img_path,
            this.gpi_company,
            this.gpi_category,
            this.gpi_on_box,
            this.gpi_cost_byn,
            this.gpi_kg,
            this.gpi_m3,
        ];
    }

    gpi_set_model(gpi_model) {
        if (typeof gpi_model != "string") {
            gpi_model = "SomeModel";
        }
        this.gpi_model = gpi_model;
    }

    gpi_set_name(gpi_name) {
        if (typeof gpi_name != "string") {
            gpi_name = "SomeName";
        }
        this.gpi_name = gpi_name;
    }

    gpi_set_img_path(gpi_img_path) {
        if (typeof gpi_img_path != "string") {
            gpi_img_path = "somePath";
        }
        this.gpi_img_path = gpi_img_path;
    }

    gpi_set_company(gpi_company) {
        if (typeof gpi_company != "string") {
            gpi_company = "SomeCompany";
        }
        this.gpi_company = gpi_company;
    }

    gpi_set_category(gpi_category) {
        if (typeof gpi_category != "string") {
            gpi_category = "SomeCategory";
        }
        this.gpi_category = gpi_category;
    }

    gpi_set_on_box(gpi_on_box) {
        gpi_on_box = Number(gpi_on_box);
        if(Number.isFinite(gpi_on_box) == false) {
            gpi_on_box = 0;
        }
        this.gpi_on_box = gpi_on_box;
    }

    gpi_set_cost_byn(gpi_cost_byn) {
        gpi_cost_byn = Number(gpi_cost_byn);
        if(Number.isFinite(gpi_cost_byn) == false) {
            gpi_cost_byn = 0;
        }
        this.gpi_cost_byn = gpi_cost_byn;
    }

    gpi_set_kg(gpi_kg) {
        gpi_kg = Number(gpi_kg);
        if(Number.isFinite(gpi_kg) == false) {
            gpi_kg = 0;
        }
        this.gpi_kg = gpi_kg;
    }

    gpi_set_m3(gpi_m3) {
        gpi_m3 = Number(gpi_m3);
        if(Number.isFinite(gpi_m3) == false) {
            gpi_m3 = 0;
        }
        this.gpi_m3 = gpi_m3;
    }
}

module.exports = gpi_ObjectProduct;
