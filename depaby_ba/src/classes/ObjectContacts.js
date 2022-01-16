class ObjectProduct {
    constructor(obj = {}) {
        this.set_depaby_caption         (obj.depaby_caption);
        this.set_depaby_description     (obj.depaby_description);
        this.set_depaby_phone1_format   (obj.depaby_phone1_format);
        this.set_depaby_phone1_noformat (obj.depaby_phone1_noformat);
        this.set_depaby_phone2_format   (obj.depaby_phone2_format);
        this.set_depaby_phone2_noformat (obj.depaby_phone2_noformat);
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
            depaby_phone1_format:   this.depaby_phone1_format,
            depaby_phone1_noformat: this.depaby_phone1_noformat,
            depaby_phone2_format:   this.depaby_phone2_format,
            depaby_phone2_noformat: this.depaby_phone2_noformat,
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
            "depaby_phone1_format",
            "depaby_phone1_noformat",
            "depaby_phone2_format",
            "depaby_phone2_noformat",
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
            this.depaby_phone1_format,
            this.depaby_phone1_noformat,
            this.depaby_phone2_format,
            this.depaby_phone2_noformat,
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
            depaby_caption = "someDocName";
        }
        this.depaby_caption = depaby_caption;
    }

    set_depaby_description(depaby_description) {
        if (typeof depaby_description != "string") {
            depaby_description = "someDocName";
        }
        this.depaby_description = depaby_description;
    }

    set_depaby_phone1_format(depaby_phone1_format) {
        if (typeof depaby_phone1_format != "string") {
            depaby_phone1_format = "someDocName";
        }
        this.depaby_phone1_format = depaby_phone1_format;
    }

    set_depaby_phone1_noformat(depaby_phone1_noformat) {
        if (typeof depaby_phone1_noformat != "string") {
            depaby_phone1_noformat = "someDocName";
        }
        this.depaby_phone1_noformat = depaby_phone1_noformat;
    }

    set_depaby_phone2_format(depaby_phone2_format) {
        if (typeof depaby_phone2_format != "string") {
            depaby_phone2_format = "someDocName";
        }
        this.depaby_phone2_format = depaby_phone2_format;
    }

    set_depaby_phone2_noformat(depaby_phone2_noformat) {
        if (typeof depaby_phone2_noformat != "string") {
            depaby_phone2_noformat = "someDocName";
        }
        this.depaby_phone2_noformat = depaby_phone2_noformat;
    }

    set_depaby_email1(depaby_email1) {
        if (typeof depaby_email1 != "string") {
            depaby_email1 = "someDocName";
        }
        this.depaby_email1 = depaby_email1;
    }

    set_depaby_email2(depaby_email2) {
        if (typeof depaby_email2 != "string") {
            depaby_email2 = "someDocName";
        }
        this.depaby_email2 = depaby_email2;
    }

    set_depaby_viber(depaby_viber) {
        if (typeof depaby_viber != "string") {
            depaby_viber = "someDocName";
        }
        this.depaby_viber = depaby_viber;
    }

    set_depaby_whatsapp(depaby_whatsapp) {
        if (typeof depaby_whatsapp != "string") {
            depaby_whatsapp = "someDocName";
        }
        this.depaby_whatsapp = depaby_whatsapp;
    }

    set_depaby_skype(depaby_skype) {
        if (typeof depaby_skype != "string") {
            depaby_skype = "someDocName";
        }
        this.depaby_skype = depaby_skype;
    }

    set_depaby_telegram(depaby_telegram) {
        if (typeof depaby_telegram != "string") {
            depaby_telegram = "someDocName";
        }
        this.depaby_telegram = depaby_telegram;
    }
}

module.exports = ObjectProduct;
