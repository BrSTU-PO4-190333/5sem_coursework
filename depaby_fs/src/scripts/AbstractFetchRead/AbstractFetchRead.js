import axios from 'axios';

function get_url_params(params = {}) {
    let url = "?";
    let keys = Object.keys(params);
    keys.forEach(function (value, index) {
        if (Array.isArray(params[value]) === true) {
            let str = params[value].join(`","`);
            url += `${value}=["${str}"]&`;
        }
        else {
            url += `${value}=${params[value]}&`;
        }
    });
    return url;
}

class AbstractFetchRead {
    constructor() {
        this.api = process.env.REACT_APP_api_url;
    }

    async read(params = {}) {
        try {
            const url = this.api + get_url_params(params);
            const response = await axios.get(url);
            console.log(response);
            return response.data.data;
        }
        catch(err) {
            alert("Ошибка с сервером API")
            return [];
        }
    }
}

export default AbstractFetchRead;
