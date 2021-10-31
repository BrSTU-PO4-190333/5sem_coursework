import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileDownload,
} from '@fortawesome/free-solid-svg-icons';

import gpi_download_file from "../../../scripts/gpi_download_file";

export default function DownloadJSON(props) {
    async function gpi_download_json_file() {
        const res = await props.gpi_get_products();
        const gpi_str_arr = JSON.stringify(res);

        const d = new Date();
        const gpi_file_name = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}_${d.getHours()}-${d.getMinutes()}_products.json`;

        gpi_download_file(gpi_str_arr, gpi_file_name);
    }

    return (
        <button
            className="btn btn-success"
            onClick={event => gpi_download_json_file()}
        >
            <FontAwesomeIcon icon={faFileDownload} /> Download JSON file
        </button>
    );
}
