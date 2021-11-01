import download_file from "../../../scripts/download_file";
import Products__getArray from "../Products__get/Products__getArray";

export default function Products__download_csv() {
    async function Products__download_json() {
        const res = await Products__getArray();
        const gpi_str_arr = JSON.stringify(res);
    
        const d = new Date();
        const gpi_file_name = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}_${d.getHours()}-${d.getMinutes()}_products.json`;
    
        download_file(gpi_str_arr, gpi_file_name);
    }

    return (
        <div className="container">
            <h2>Download JSON</h2>
            <button className="btn btn-success"
                onClick={Products__download_json}
            >Download JSON</button>
        </div>
    )
}
