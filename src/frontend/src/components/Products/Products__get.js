import axios from 'axios';

export default async function Products__get() {
    try {
        const URL = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/gpi_get_products`;
        const RES = await axios.get(URL);
        console.log(RES);
        if (RES.data.err !== undefined) {
            alert(`Error \nCode: ${RES.data.err.code} \nMessage: ${RES.data.err.message}`);
        }
        if (RES.data.length !== undefined) {
            return RES.data;
        }
        return [];
    }
    catch (err) {
        console.error(err);
        alert("API error");
        return [];
    }
}
