import download_file from "../../../scripts/download_file";
import Product from "../../../scripts/Product";

export default function Products__download_csv() {
    async function Products__download_csv() {
        const PRD = new Product();
        const ARR = await PRD.get();

        let gpi_str = "";
    
        if (ARR.length > 0) {
            const gpi_keys = Object.keys(ARR[0]);
    
            gpi_str += `"${gpi_keys.join('", "')}"\n`;
            console.log(ARR);
    
            ARR.forEach(function (obj) {
                gpi_keys.forEach(function (val) {
                    gpi_str += `"${obj[val]}", `;
                });
                gpi_str += `\n`;
            })
        }
    
        const D = new Date();
        const FILE_NAME = `${D.getFullYear()}-${D.getMonth()}-${D.getDate()}_${D.getHours()}-${D.getMinutes()}_products.csv`;
    
        download_file(gpi_str, FILE_NAME);
    }

    return (
        <div className="container">
            <h2>Download CSV</h2>
            <button className="btn btn-success"
                onClick={Products__download_csv}
            >Download CSV</button>
        </div>
    )
}
