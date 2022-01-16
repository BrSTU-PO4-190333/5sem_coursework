import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import FetchContacts from '../../../scripts/FetchContacts';

function ContactDeleteButton(props) {
  async function contact_delete(id) {
    const contacts_object = new FetchContacts();
    const response = await contacts_object.delete(
      {
        id: id,
      }
    );
    
    if (response === false) {
      alert(`Contact not deleted (id = ${id})`);
      return;
    }

    if (response === true) {
      alert(`Contact deleted with success (id = ${id})`);
      await props.contacts_read();
      return;
    }
  }

  return (
    <button onClick={event => contact_delete(props.id)}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
}

export default ContactDeleteButton;
