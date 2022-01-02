class gpi_class_download_file {
    constructor() {
        this.gpi_date = new Date();
        this.gpi_set_year();
        this.gpi_set_month();
        this.gpi_set_day();
        this.gpi_set_hours();
        this.gpi_set_minutes();
    }

    gpi_set_year() {
        this.gpi_year = this.gpi_date.getFullYear();
    }

    gpi_set_month() {
        let gpi_month = this.gpi_date.getMonth() + 1;
        this.gpi_month = "";

        if (gpi_month < 10) {
            this.gpi_month += "0";
        }

        this.gpi_month += gpi_month;
    }

    gpi_set_day() {
        let gpi_day = this.gpi_date.getDate();
        this.gpi_day = "";

        if (gpi_day < 10) {
            this.gpi_day += "0";
        }
        
        this.gpi_day += gpi_day;
    }

    gpi_set_hours() {
        let gpi_hours = this.gpi_date.getHours();
        this.gpi_hours = "";

        if (gpi_hours < 10) {
            this.gpi_hours += "0";
        }
        
        this.gpi_hours += gpi_hours;
    }

    gpi_set_minutes() {
        let gpi_minutes = this.gpi_date.getMinutes();
        this.gpi_minutes = "";

        if (gpi_minutes < 10) {
            this.gpi_minutes += "0";
        }
        
        this.gpi_minutes += gpi_minutes;
    }

    gpi_download_file(text = "[{}]", gpi_file_name = "data.json") {
        gpi_file_name = `${this.gpi_hours}-${this.gpi_minutes}_` + gpi_file_name;
        gpi_file_name = `${this.gpi_year}-${this.gpi_month}-${this.gpi_day}_` + gpi_file_name;
        if (gpi_file_name === "") {
            gpi_file_name += "data.json";
        }

        let blob = new Blob([text], { type: 'text/plain' });
        let link = document.createElement("a");
        link.download = gpi_file_name;
        //link.innerHTML = "Download File";
        link.href = window.URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(link.href);
        }, 100);
    }
}

export default gpi_class_download_file;
