import gpi_class_FetchProducts from "./../../scripts/gpi_class_FetchProducts";
import gpi_class_download_file from "./../../scripts/gpi_class_download_file";

function GpiDownloadJSONproducts() {
    async function gpi_download_json_products() {
        const gpi_obj = new gpi_class_FetchProducts();
        const gpi_res = await gpi_obj.gpi_get_products();
        console.log(gpi_res);
        
        if (gpi_res.length === 0) {
            alert("No data on table products");
        }

        const gpi_file_content = JSON.stringify(gpi_res, null, 2);
    
        const gpi_obj_download_file = new gpi_class_download_file();
        gpi_obj_download_file.gpi_download_file(gpi_file_content, "products.json");
    }

    return (
        <div className="container">
            <h2>Download JSON</h2>
            <button className="btn btn-success"
                onClick={gpi_download_json_products}
            >Download JSON</button>
        </div>
    )
}

export default GpiDownloadJSONproducts;
