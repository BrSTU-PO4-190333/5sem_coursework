import axios from 'axios';

class FetchContacts {
    constructor() {
        this.api = process.env.REACT_APP_api_url;
        this.login = localStorage.getItem("login");
        this.password = localStorage.getItem("password");
    }

    async read(params = {}) {
        try {
            let url = `${this.api}/api/contacts`;

            if (params.id) {
                url = `${this.api}/api/contacts?id=${params.id}`;
            }

            else if (params.sort) {
                url = `${this.api}/api/contacts?sort=${params.sort}`;
            }
            
            const response = await axios.get(url);
            console.log(response);

            if (response.data.data.length === 0) {
                return [];
            }

            return response.data.data;
        }
        catch(err) {
            console.log(err);
            alert("Error connect to API");
            return [];
        }
    }

    // Метод, который удаляет контакт по ид
    async delete(params = {}) {
        try {
            const url = `${this.api}/api/contacts`;
            let data = {
                "login": this.login,
                "password": this.password,
            };

            if (params.id) {
                data.id = params.id;
            }
            console.log(data)

            const response = await axios.delete(url, {
                data: data
            });
            console.log(response);

            if (response.data.code !== 200) {
                return false;
            }

            return true;
        }
        catch(err) {
            console.log(err);
            alert("Error connect to API");
            return false;
        }
    }

    async create(array) {
        try {
            const url = `${this.api}/api/contacts`;
            const data = {
                "login": this.login,
                "password": this.password,
                "data": array,
            };

            const response = await axios.post(url, data);
            console.log(response);

            return true;
        }
        catch(err) {
            console.log(err);
            alert("Error connect to API");
            return false;
        }
    }

    async update(contact_data, contact_id) {
        try {
            const url = `${this.api}/api/contacts`;
            const data = {
                "login": this.login,
                "password": this.password,
                "id": contact_id,
                "data": contact_data,
            };

            const response = await axios.put(url, data);
            console.log(response);

            return true;
        }
        catch(err) {
            console.log(err);
            alert("Error connect to API");
            return false;
        }
    }
}

export default FetchContacts;
