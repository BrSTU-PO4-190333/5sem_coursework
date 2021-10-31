import download_file from "./download_file";
import Products__get from "./Products__get";

export default async function Products__download_json() {
    const res = await Products__get();
    const gpi_str_arr = JSON.stringify(res);

    const d = new Date();
    const gpi_file_name = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}_${d.getHours()}-${d.getMinutes()}_products.json`;

    download_file(gpi_str_arr, gpi_file_name);
}
