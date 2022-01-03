import axios from 'axios';

class gpi_class_FetchProducts {
    constructor() {
        this.gpi_site = process.env.REACT_APP__API_URL;
        this.gpi_login = localStorage.getItem("login");
        this.gpi_password = localStorage.getItem("password");
    }

    // Метод, который возвращает список продуктов
    async gpi_get_products(gpi_invert = false, gpi_id = undefined) {
        try {
            let gpi_url = "";

            if (typeof gpi_id != "undefined") {
                gpi_url = `${this.gpi_site}/gpi_get_products?gpi_id=${gpi_id}`;
            }

            else if (gpi_invert === true) {
                gpi_url = `${this.gpi_site}/gpi_get_products?gpi_invert=true`;
            }

            else {
                gpi_url = `${this.gpi_site}/gpi_get_products`;
            }
            
            const gpi_res = await axios.get(gpi_url);
            console.log(gpi_res);

            if (gpi_res.data.gpi_code === 500) {
                alert(gpi_res.data.gpi_error);
                return [{}];
            }

            if (gpi_res.data.length === 0) {
                return [{}];
            }

            return gpi_res.data;
        }
        catch(gpi_error) {
            console.error({
                "gpi_msg": gpi_error,
            });
            alert("Error connect to server");
            return [];
        }
    }

    // Метод, который удаляет продукт по ид
    async gpi_delete_product(gpi_id) {
        try {
            const gpi_url = `${this.gpi_site}/gpi_delete_product`;
            const gpi_data = {
                "gpi_login": this.gpi_login,
                "gpi_password": this.gpi_password,
                "gpi_id": gpi_id,
            }

            const gpi_res = await axios.post(gpi_url, gpi_data);
            console.log(gpi_res);

            if (gpi_res.data.gpi_code === 500) {
                alert(gpi_res.data.gpi_error);
                return false;
            }

            return true;
        }
        catch(gpi_error) {
            console.error({
                "gpi_msg": gpi_error,
            });
            alert("Error connect to server");
            return [];
        }
    }

    // Метод, который очищает таблицу продуктов
    async gpi_delete_table_product() {
        try {
            const gpi_url = `${this.gpi_site}/gpi_delete_table_products`;
            const gpi_data = {
                "gpi_login": this.gpi_login,
                "gpi_password": this.gpi_password,
            }

            const gpi_res = await axios.post(gpi_url, gpi_data);
            console.log(gpi_res);

            if (gpi_res.data.gpi_code === 500) {
                alert(gpi_res.data.gpi_error);
                return false;
            }

            return true;
        }
        catch(gpi_error) {
            console.error({
                "gpi_msg": gpi_error,
            });
            alert("Error connect to server");
            return [];
        }
    }

    // Метод, который добавляет продукты
    async gpi_add_products(gpi_array) {
        try {
            const gpi_url = `${this.gpi_site}/gpi_add_products`;
            const gpi_data = {
                "gpi_login": this.gpi_login,
                "gpi_password": this.gpi_password,
                "gpi_array": gpi_array,
            }

            const gpi_res = await axios.post(gpi_url, gpi_data);
            console.log(gpi_res);

            if (gpi_res.data.gpi_code === 500) {
                alert(gpi_res.data.gpi_error);
                return false;
            }

            return true;
        }
        catch(gpi_error) {
            console.error({
                "gpi_msg": gpi_error,
            });
            alert("Error connect to server");
            return [];
        }
    }

    // Метод, который обновляет продукт
    async gpi_update_product(gpi_data, gpi_id) {
        try {
            const gpi_req_url = `${this.gpi_site}/gpi_update_product`;
            const gpi_req_data = {
                "gpi_login": this.gpi_login,
                "gpi_password": this.gpi_password,
                "gpi_data": gpi_data,
                "gpi_id": gpi_id,
            }

            const gpi_res = await axios.post(gpi_req_url, gpi_req_data);
            console.log(gpi_res);

            if (gpi_res.data.gpi_code === 500) {
                alert(gpi_res.data.gpi_error);
                return false;
            }

            return true;
        }
        catch(gpi_error) {
            console.error({
                "gpi_msg": gpi_error,
            });
            alert("Error connect to server");
            return [];
        }
    }
}

export default gpi_class_FetchProducts;
