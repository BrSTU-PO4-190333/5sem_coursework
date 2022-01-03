import axios from 'axios';

class gpi_class_FetchProducts {
    constructor() {
        this.gpi_site = process.env.REACT_APP__API_URL;
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
                return undefined;
            }

            return gpi_res.data;
        }
        catch(gpi_error) {
            console.error({
                "gpi_msg": gpi_error,
            });
            alert("Error connect to server");
            return undefined;
        }
    }
}

export default gpi_class_FetchProducts;
