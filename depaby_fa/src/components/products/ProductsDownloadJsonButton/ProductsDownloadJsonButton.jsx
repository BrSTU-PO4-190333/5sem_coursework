import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import download_file from "../../../scripts/download_file";

function ProductsDownloadJsonButton(props) {
  async function products_download_json(products_array = [{}]) {
    if (products_array.length === 0) {
      alert("Нет данных в таблице. Что сохранять то?");
      return;
    }

    const file_content = JSON.stringify(products_array, null, 2);

    const download_file_object = new download_file();
    download_file_object.download_file(file_content, "depaby_products.json");
  }

  return (
    <button
      onClick={event => products_download_json(props.products_array)}
      title="Сохранить в JSON"
    >
      <FontAwesomeIcon icon={faFileDownload} />
    </button>
  )
}

export default ProductsDownloadJsonButton;
