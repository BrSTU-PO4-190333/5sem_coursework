import gpi_class_FetchProducts from "./../../scripts/gpi_class_FetchProducts";

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

            const gpi_class_obj = new gpi_class_FetchProducts();
            const gpi_status = await gpi_class_obj.gpi_add_products(gpi_obj);

            if (gpi_status === false) {
                return;
            }
            
            alert("Added products with success");
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