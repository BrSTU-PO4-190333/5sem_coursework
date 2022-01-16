import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import download_file from "../../../scripts/download_file";

function DocumentsDownloadJsonButton(props) {
  async function documents_download_json(documents_array = [{}]) {
    if (documents_array.length === 0) {
      alert("Нет данных в таблице. Что сохранять то?");
      return;
    }

    const file_content = JSON.stringify(documents_array, null, 2);

    const download_file_object = new download_file();
    download_file_object.download_file(file_content, "depaby_documents.json");
  }

  return (
    <button
      onClick={event => documents_download_json(props.documents_array)}
      title="Сохранить в JSON"
    >
      <FontAwesomeIcon icon={faFileDownload} />
    </button>
  )
}

export default DocumentsDownloadJsonButton;
