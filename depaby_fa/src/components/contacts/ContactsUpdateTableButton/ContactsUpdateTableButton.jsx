import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

function ContactsUpdateTableButton(props) {
  return (
    <button
      onClick={props.contacts_read}
      title="Загрузить таблицу с сервера"
    >
      <FontAwesomeIcon icon={faSync} />
    </button>
  );
}

export default ContactsUpdateTableButton;
