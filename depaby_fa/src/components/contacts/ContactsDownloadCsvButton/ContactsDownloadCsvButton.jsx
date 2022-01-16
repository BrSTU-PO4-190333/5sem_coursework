import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons';

import download_file from "../../../scripts/download_file";

function ContactsDownloadCsvButton(props) {
  async function contacts_download_csv(contacts_array = [{}]) {
    if (contacts_array.length === 0) {
      alert("Нет данных в таблице. Что сохранять то?");
      return;
    }

    let file_content = "";
    const keys = Object.keys(contacts_array[0]);

    // gpi_ Добавляем CSV строку названий ячеек
    file_content += `"${keys.join('", "')}"\n`;

    // gpi_ Добавляем CSV строки данных
    contacts_array.forEach(function (obj) {
      keys.forEach(function (val) {
        file_content += `"${obj[val]}", `;
      });
      file_content += `\n`;
    })

    const download_file_object = new download_file();
    download_file_object.download_file(file_content, "depaby_contacts.csv");
  }

  return (
    <button
      onClick={event => contacts_download_csv(props.contacts_array)}
      title="Сохранить в CSV"
    >
      <FontAwesomeIcon icon={faFileCsv} />
    </button>
  )
}

export default ContactsDownloadCsvButton;
