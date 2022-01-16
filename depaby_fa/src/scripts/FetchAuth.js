import axios from 'axios';

class FetchAuth {
    constructor(login, password) {
        this.api = process.env.REACT_APP_api_url;
        this.login = login;
        this.password = password;
    }

    async auth() {
        try {
            const url = `${this.api}/api/admin_auth`;
            const data = {
                login: this.login,
                password: this.password,
            }
            const response = await axios.post(url, data);
            console.log(response);

            if (response.data.code === 202) {
                alert("Не найден в БД логин и пароль");
                return false;
            }
           
            return true;
        }
        catch(err) {
            console.log(err);
            alert("Ошибка соединения с API");
        }
    }
}

export default FetchAuth;
