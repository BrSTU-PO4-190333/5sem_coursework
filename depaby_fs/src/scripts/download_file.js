class download_file {
    constructor() {
        this.date = new Date();
        this.set_year();
        this.set_month();
        this.set_day();
        this.set_hours();
        this.set_minutes();
    }

    set_year() {
        this.year = this.date.getFullYear();
    }

    set_month() {
        let month = this.date.getMonth() + 1;
        this.month = "";

        if (month < 10) {
            this.month += "0";
        }

        this.month += month;
    }

    set_day() {
        let day = this.date.getDate();
        this.day = "";

        if (day < 10) {
            this.day += "0";
        }
        
        this.day += day;
    }

    set_hours() {
        let hours = this.date.getHours();
        this.hours = "";

        if (hours < 10) {
            this.hours += "0";
        }
        
        this.hours += hours;
    }

    set_minutes() {
        let minutes = this.date.getMinutes();
        this.minutes = "";

        if (minutes < 10) {
            this.minutes += "0";
        }
        
        this.minutes += minutes;
    }

    download_file(text = "[{}]", file_name = "data.json") {
        file_name = `${this.hours}-${this.minutes}_` + file_name;
        file_name = `${this.year}-${this.month}-${this.day}_` + file_name;
        if (file_name === "") {
            file_name += "data.json";
        }

        let blob = new Blob([text], { type: 'text/plain' });
        let link = document.createElement("a");
        link.download = file_name;
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

export default download_file;
