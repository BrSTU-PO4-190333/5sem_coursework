import axios from 'axios';

class FetchDocuments {
    constructor() {
        this.api = process.env.REACT_APP_api_url;
    }

    async read(params = {}) {
        try {
            let url = `${this.api}/api/documents`;

            if (params.category) {
                url = `${this.api}/api/documents?category=${params.category}`;
            }

            const response = await axios.get(url);
            console.log(response);
            return response.data.data;
        }
        catch(err) {
            alert("Error connect to API")
            return undefined;
        }
    }
}

export default FetchDocuments;
