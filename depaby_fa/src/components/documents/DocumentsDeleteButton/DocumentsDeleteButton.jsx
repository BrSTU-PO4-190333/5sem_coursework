import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import FetchDocuments from "../../../scripts/FetchDocuments";

function DocumentsDeleteButton(props) {
  async function documents_delete() {
    const documents_object = new FetchDocuments();
    const response = await documents_object.delete();

    if (response === false) {
      alert(`Table documents not deleted`);
      return;
    }

    if (response === true) {
      alert(`Table documents deleted with success`);
      await props.documents_read();
      return;
    }
  }

  return (
    <button
      onClick={documents_delete}
      title="Удалить таблицу"
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  )
}

export default DocumentsDeleteButton;
