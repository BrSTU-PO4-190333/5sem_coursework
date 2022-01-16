import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

function DocumentsUpdateTableButton(props) {
  return (
    <button
      onClick={props.documents_read}
      title="Загрузить таблицу с сервера"
    >
      <FontAwesomeIcon icon={faSync} />
    </button>
  );
}

export default DocumentsUpdateTableButton;
