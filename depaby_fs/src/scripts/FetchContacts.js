import axios from 'axios';

class FetchContatcs {
    constructor() {
        this.api = process.env.REACT_APP_api_url;
    }

    async read() {
        try {
            const response = await axios.get(`${this.api}/api/contacts`);
            console.log(response);
            return response.data.data;
        }
        catch(err) {
            alert("Error connect to API")
            return undefined;
        }
    }
}

export default FetchContatcs;
