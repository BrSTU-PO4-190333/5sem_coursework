import axios from "axios";

function GpiLoadProducts() {
    function gpi_open_file(event) {
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
                const gpi_url = `http://localhost:3001/gpi_add_products`;
                const gpi_data = {
                    gpi_login: localStorage.getItem("login"),
                    gpi_password: localStorage.getItem("password"),
                    gpi_array: gpi_obj,
                }
 
                const gpi_res = await axios.post(gpi_url, gpi_data);
                console.log(gpi_res);

                if (gpi_res.data.gpi_code !== "success") {
                    return;
                }
                
                alert("Added products");
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
                    onChange={event => gpi_open_file(event)}
                />
            </div>
        </div>
    );
}

export default GpiLoadProducts;