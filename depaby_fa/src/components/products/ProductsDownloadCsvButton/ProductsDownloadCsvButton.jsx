import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons';

import download_file from "../../../scripts/download_file";

function ProductsDownloadCsvButton(props) {
  async function products_download_csv(products_array = [{}]) {
    if (products_array.length === 0) {
      alert("Нет данных в таблице. Что сохранять то?");
      return;
    }

    let file_content = "";
    const keys = Object.keys(products_array[0]);

    // gpi_ Добавляем CSV строку названий ячеек
    file_content += `"${keys.join('", "')}"\n`;

    // gpi_ Добавляем CSV строки данных
    products_array.forEach(function (obj) {
      keys.forEach(function (val) {
        file_content += `"${obj[val]}", `;
      });
      file_content += `\n`;
    })

    const download_file_object = new download_file();
    download_file_object.download_file(file_content, "depaby_products.csv");
  }

  return (
    <button
      onClick={event => products_download_csv(props.products_array)}
      title="Сохранить в CSV"
    >
      <FontAwesomeIcon icon={faFileCsv} />
    </button>
  )
}

export default ProductsDownloadCsvButton;
