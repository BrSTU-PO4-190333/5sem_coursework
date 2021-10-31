import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileExcel,
} from '@fortawesome/free-solid-svg-icons';

import gpi_download_file from "../../../scripts/gpi_download_file";

export default function DownloadCSV(props) {
    async function gpi_download_csv_file() {
        const arr = await props.gpi_get_products();
        let gpi_str = "";

        if (arr.length > 0) {
            const gpi_keys = Object.keys(arr[0]);

            gpi_str += `"${gpi_keys.join('", "')}"\n`;
            console.log(arr);

            arr.forEach(function (obj) {
                gpi_keys.forEach(function (val) {
                    gpi_str += `"${obj[val]}", `;
                });
                gpi_str += `\n`;
            })
        }

        const d = new Date();
        const gpi_file_name = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}_${d.getHours()}-${d.getMinutes()}_products.csv`;

        gpi_download_file(gpi_str, gpi_file_name);
    }

    return (
        <button
            className="btn btn-success"
            onClick={event => gpi_download_csv_file()}
        >
            <FontAwesomeIcon icon={faFileExcel} /> Download CSV file
        </button>
    );
}
