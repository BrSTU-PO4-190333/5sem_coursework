import gpi_class_FetchProducts from "./../../scripts/gpi_class_FetchProducts";
import gpi_class_download_file from "./../../scripts/gpi_class_download_file";

function GpiDownloadCSVproducts() {
    async function gpi_download_csv_products() {
        const gpi_obj = new gpi_class_FetchProducts();
        const gpi_res = await gpi_obj.gpi_get_products();
        console.log(gpi_res);
        
        if (gpi_res.length === 0) {
            alert("No data on table products");
        }

        let gpi_file_content = "";
        const gpi_keys = Object.keys(gpi_res[0]);
    
        // gpi_ Добавляем CSV строку названий ячеек
        gpi_file_content += `"${gpi_keys.join('", "')}"\n`;
        
        // gpi_ Добавляем CSV строки данных
        gpi_res.forEach(function (obj) {
            gpi_keys.forEach(function (val) {
                gpi_file_content += `"${obj[val]}", `;
            });
            gpi_file_content += `\n`;
        })
    
        const gpi_obj_download_file = new gpi_class_download_file();
        gpi_obj_download_file.gpi_download_file(gpi_file_content, "products.csv");
    }

    return (
        <div className="container">
            <h2>Download CSV</h2>
            <button className="btn btn-success"
                onClick={gpi_download_csv_products}
            >Download CSV</button>
        </div>
    )
}

export default GpiDownloadCSVproducts;
