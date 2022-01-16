import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import FetchDocuments from '../../../scripts/FetchDocuments';

function DocumentDeleteButton(props) {
  async function document_delete(id) {
    const documents_object = new FetchDocuments();
    const response = await documents_object.delete(
      {
        id: id,
      }
    );
    
    if (response === false) {
      alert(`Document not deleted (id = ${id})`);
      return;
    }

    if (response === true) {
      alert(`Document deleted with success (id = ${id})`);
      await props.documents_read();
      return;
    }
  }

  return (
    <button onClick={event => document_delete(props.id)}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
}

export default DocumentDeleteButton;
