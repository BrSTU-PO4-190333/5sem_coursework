import axios from 'axios';

class FetchProducts {
    constructor() {
        this.api = process.env.REACT_APP_api_url;
    }

    async read(params = {}) {
        try {
            const response = await axios.get(`${this.api}/api/products`);
            console.log(response);
            return response.data.data;
        }
        catch(err) {
            alert("Error connect to API")
            return undefined;
        }
    }
}

export default FetchProducts;
