import download_file from "../../../scripts/download_file";
import Product from "../../../scripts/Product";

export default function Products__download_csv() {
    async function Products__download_json() {
        const PRD = new Product();
        const ARR = await PRD.get();

        const STR_ARR = JSON.stringify(ARR);
    
        const D = new Date();
        const FILE_NAME = `${D.getFullYear()}-${D.getMonth()}-${D.getDate()}_${D.getHours()}-${D.getMinutes()}_products.json`;
    
        download_file(STR_ARR, FILE_NAME);
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
