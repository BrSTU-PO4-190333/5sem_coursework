import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import FetchContacts from "../../../scripts/FetchContacts";

function ContactsDeleteButton(props) {
  async function contacts_delete() {
    const contacts_object = new FetchContacts();
    const response = await contacts_object.delete();

    if (response === false) {
      alert(`Table contacts not deleted`);
      return;
    }

    if (response === true) {
      alert(`Table contacts deleted with success`);
      await props.contacts_read();
      return;
    }
  }

  return (
    <button
      onClick={contacts_delete}
      title="Удалить таблицу"
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  )
}

export default ContactsDeleteButton;
