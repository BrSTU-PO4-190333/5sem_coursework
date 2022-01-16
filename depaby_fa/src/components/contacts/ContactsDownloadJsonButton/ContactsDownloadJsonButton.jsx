import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import download_file from "../../../scripts/download_file";

function ContactsDownloadJsonButton(props) {
  async function contacts_download_json(contacts_array = [{}]) {
    if (contacts_array.length === 0) {
      alert("Нет данных в таблице. Что сохранять то?");
      return;
    }

    const file_content = JSON.stringify(contacts_array, null, 2);

    const download_file_object = new download_file();
    download_file_object.download_file(file_content, "depaby_contacts.json");
  }

  return (
    <button
      onClick={event => contacts_download_json(props.contacts_array)}
      title="Сохранить в JSON"
    >
      <FontAwesomeIcon icon={faFileDownload} />
    </button>
  )
}

export default ContactsDownloadJsonButton;
