class ObjectProduct {
    constructor(obj = {}) {
        this.set_depaby_caption         (obj.depaby_caption);
        this.set_depaby_description     (obj.depaby_description);
        this.set_depaby_phone1          (obj.depaby_phone1);
        this.set_depaby_phone2          (obj.depaby_phone2);
        this.set_depaby_email1          (obj.depaby_email1);
        this.set_depaby_email2          (obj.depaby_email2);
        this.set_depaby_viber           (obj.depaby_viber);
        this.set_depaby_whatsapp        (obj.depaby_whatsapp);
        this.set_depaby_skype           (obj.depaby_skype);
        this.set_depaby_telegram        (obj.depaby_telegram);
    }

    get() {
        return {
            depaby_caption:         this.depaby_caption,
            depaby_description:     this.depaby_description,
            depaby_phone1:          this.depaby_phone1,
            depaby_phone2:          this.depaby_phone2,
            depaby_email1:          this.depaby_email1,
            depaby_email2:          this.depaby_email2,
            depaby_viber:           this.depaby_viber,
            depaby_whatsapp:        this.depaby_whatsapp,
            depaby_skype:           this.depaby_skype,
            depaby_telegram:        this.depaby_telegram,
        };
    }

    static get_keys() {
        return [
            "depaby_caption",
            "depaby_description",
            "depaby_phone1",
            "depaby_phone2",
            "depaby_email1",
            "depaby_email2",
            "depaby_viber",
            "depaby_whatsapp",
            "depaby_skype",
            "depaby_telegram",
        ];
    }

    get_values() {
        return [
            this.depaby_caption,
            this.depaby_description,
            this.depaby_phone1,
            this.depaby_phone2,
            this.depaby_email1,
            this.depaby_email2,
            this.depaby_viber,
            this.depaby_whatsapp,
            this.depaby_skype,
            this.depaby_telegram,
        ];
    }

    set_depaby_caption(depaby_caption) {
        if (typeof depaby_caption != "string") {
            depaby_caption = "someContact";
        }
        this.depaby_caption = depaby_caption;
    }

    set_depaby_description(depaby_description) {
        if (typeof depaby_description != "string") {
            depaby_description = "someDescription";
        }
        this.depaby_description = depaby_description;
    }

    set_depaby_phone1(depaby_phone1) {
        if (typeof depaby_phone1 != "string") {
            depaby_phone1 = "+111 (22) 333-44-55 (BY)";
        }
        this.depaby_phone1 = depaby_phone1;
    }

    set_depaby_phone2(depaby_phone2) {
        if (typeof depaby_phone2 != "string") {
            depaby_phone2 = "+999 (88) 777-66-55 (TR)";
        }
        this.depaby_phone2 = depaby_phone2;
    }

    set_depaby_email1(depaby_email1) {
        if (typeof depaby_email1 != "string") {
            depaby_email1 = "user@de-pa.by";
        }
        this.depaby_email1 = depaby_email1;
    }

    set_depaby_email2(depaby_email2) {
        if (typeof depaby_email2 != "string") {
            depaby_email2 = "user@de-pa.by";
        }
        this.depaby_email2 = depaby_email2;
    }

    set_depaby_viber(depaby_viber) {
        if (typeof depaby_viber != "string") {
            depaby_viber = "111223334455";
        }
        this.depaby_viber = depaby_viber;
    }

    set_depaby_whatsapp(depaby_whatsapp) {
        if (typeof depaby_whatsapp != "string") {
            depaby_whatsapp = "111223334455";
        }
        this.depaby_whatsapp = depaby_whatsapp;
    }

    set_depaby_skype(depaby_skype) {
        if (typeof depaby_skype != "string") {
            depaby_skype = "live:xxx.xxxxxxxxxxxxxxxx";
        }
        this.depaby_skype = depaby_skype;
    }

    set_depaby_telegram(depaby_telegram) {
        if (typeof depaby_telegram != "string") {
            depaby_telegram = "@xxxxxxxx";
        }
        this.depaby_telegram = depaby_telegram;
    }
}

module.exports = ObjectProduct;
