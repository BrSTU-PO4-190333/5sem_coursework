import axios from "axios";

export default class Product {
    async get(obj = {}) {
        let gpi_url = "";
        const gpi_id = obj.id;
        if (typeof(gpi_id) !== "undefined") {
            gpi_url = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/products/get?id=${gpi_id}`;
        }
        else {
            gpi_url = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/products/get`;
        }

        try {
            const RES = await axios.get(gpi_url);
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

    async edit(ID, obj) {
        const GPI_URL = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/products/edit`;
        const GPI_DATA = {
            login: localStorage.getItem("login"),
            password: localStorage.getItem("password"),
            id: ID,
            data: obj,
        };

        try {
            const RES = await axios.post(GPI_URL, GPI_DATA);
            console.log(RES);
            console.log(RES.data);
            if (RES.data === "success") {
                alert("Element edited");
            }
        }
        catch(err) {
            console.error(err);
            alert("API error");
        }
    }
}
