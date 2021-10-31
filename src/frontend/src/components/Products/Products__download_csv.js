import download_file from "./download_file";
import Products__get from "./Products__get";

export default async function Products__download_csv() {
    const arr = await Products__get();
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

    download_file(gpi_str, gpi_file_name);
}
