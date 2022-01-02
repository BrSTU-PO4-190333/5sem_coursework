import axios from 'axios';

class gpi_class_Fetch {
    constructor(gpi_login, gpi_password) {
        this.gpi_site = `http://localhost:3001`;
        this.gpi_login = gpi_login;
        this.gpi_password = gpi_password;
    }

    // Метод, который проверяет логин и пароль
    async gpi_auth() {
        try {
            const gpi_url = `${this.gpi_site}/gpi_auth`;
            const gpi_data = {
                gpi_login: this.gpi_login,
                gpi_password: this.gpi_password,
            }
            const gpi_res = await axios.post(gpi_url, gpi_data);
            console.log(gpi_res);

            if (gpi_res.data.gpi_code === 500) {
                alert(gpi_res.data.gpi_error);
                return false;
            }

            if (gpi_res.data.gpi_code !== "success") {
                alert(gpi_res.data.gpi_msg);
                return false;
            }

            return true;
        }
        catch(gpi_error) {
            console.error({
                "gpi_msg": gpi_error,
            });
            alert("Error connect to server");
        }
    }
}

export default gpi_class_Fetch;
