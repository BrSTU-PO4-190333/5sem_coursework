import axios from "axios";

export default function Products__open() {
    function Products__open_file(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async function () {
            const GPI_STR = reader.result;
            let gpi_obj;

            try {
                gpi_obj = JSON.parse(GPI_STR);
            }
            catch {
                alert("Файл не JSON формата");
                return;
            }

            if (gpi_obj.length == null) {
                alert("Файл не имеет массив структур!");
                return;
            }

            try {
                const GPI_URL = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/gpi_add_products`;
                let gpi_data = {
                    login: localStorage.getItem("login"),
                    password: localStorage.getItem("password"),
                    KEYS: [],
                    VALUES: [],
                }

                const GPI_KEYS = Object.keys(gpi_obj[0]);
                gpi_data["KEYS"] = GPI_KEYS;
                console.log("KEYS");
                console.log(gpi_data.KEYS);

                gpi_obj.forEach(arrObj => {
                    gpi_data.VALUES.push([]);
                    const id = gpi_data.VALUES.length - 1;

                    GPI_KEYS.forEach(key => {
                        gpi_data.VALUES[id].push(gpi_obj[id][key]);
                    })
                });
                console.log("VALUES");
                console.log(gpi_data.VALUES);

                const RES = await axios.post(GPI_URL, gpi_data);

                if (RES.data.err) {
                    alert(`Error! \nCode: ${RES.data.err.code} \nMessage: ${RES.data.err.message}`);
                    return;
                }

                console.log(RES);

                if (RES.data === "success") {
                    alert("Added products");
                }
            }
            catch (err) {
                console.error(err);
                alert("Err connect API")
            }
        };
    }

    return (
        <div className="container">
            <h2>Open products file</h2>
            <div className="mb-3">
                <label htmlFor="Products__open" className="form-label">Choose file</label>
                <input className="form-control"
                    type="file"
                    id="Products__open"
                    onChange={event => Products__open_file(event)}
                />
            </div>
        </div>
    );
}