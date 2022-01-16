import { useState } from "react";

import FetchContacts from "./../../scripts/FetchContacts";
import ContactsDeleteButton from "../../components/contacts/ContactsDeleteButton/ContactsDeleteButton";
import ContactDeleteButton from "../../components/contacts/ContactDeleteButton/ContactDeleteButton";
import ContactsDownloadCsvButton from "../../components/contacts/ContactsDownloadCsvButton/ContactsDownloadCsvButton";
import ContactsDownloadJsonButton from "../../components/contacts/ContactsDownloadJsonButton/ContactsDownloadJsonButton";
import ContactsUpdateTableButton from "../../components/contacts/ContactsUpdateTableButton/ContactsUpdateTableButton";
import ContactFormButton from "../../components/contacts/ContactFormButton/ContactFormButton";
import ContactsLoadButton from "../../components/contacts/ContactsLoadButton/ContactsLoadButton";
import ToolbarHomeButton from "../../components/Toolbar/ToolbarHomeButton/ToolbarHomeButton";
import styles from "./contacts.module.css";

function Contacts() {
  const [contactsArray, setContactsArray] = useState([]);
  const [indexEditContact, setIndexEditContact] = useState('new');
  const [contactFormSignal, setContactFormSignal] = useState(0);

  async function contacts_read() {
    const contacts_object = new FetchContacts();
    const response = await contacts_object.read();

    if (response.length === 0) {
      alert("В таблице продуктов нет записей");
    }

    setContactsArray(response);
  }

  return (
    <div className={styles.window}>
      <div className='depaby_toolbar'>
        <ToolbarHomeButton />
        <ContactsLoadButton />
        <ContactFormButton
          table_id={indexEditContact === 'new' ? 'new' : contactsArray[indexEditContact].depaby_id}
          contact_data={contactsArray[indexEditContact] ? contactsArray[indexEditContact] : {}}
          signal={contactFormSignal}
          destructor={() => {setIndexEditContact('new')}}
        />
        <ContactsUpdateTableButton contacts_read={contacts_read} />
        <ContactsDownloadJsonButton contacts_array={contactsArray} />
        <ContactsDownloadCsvButton contacts_array={contactsArray} />
        <ContactsDeleteButton contacts_read={contacts_read} />
      </div>
      <table className='depaby_table'>
        <thead>
          <tr>
            <th></th>
            <th>id</th>
            <th>caption</th>
            <th>description</th>
            <th>phone1_format</th>
            <th>phone1_noformat</th>
            <th>phone2_format</th>
            <th>phone2_noformat</th>
            <th>email1</th>
            <th>email2</th>
            <th>viber</th>
            <th>whatsapp</th>
            <th>skype</th>
            <th>telegram</th>
          </tr>
        </thead>
        <tbody>
          {contactsArray.map((value, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{value.depaby_id}</td>
              <td>{value.depaby_caption}</td>
              <td>{value.depaby_description}</td>
              <td>{value.depaby_phone1_format}</td>
              <td>{value.depaby_phone1_noformat}</td>
              <td>{value.depaby_phone2_format}</td>
              <td>{value.depaby_phone2_noformat}</td>
              <td>{value.depaby_email1}</td>
              <td>{value.depaby_email2}</td>
              <td>{value.depaby_viber}</td>
              <td>{value.depaby_whatsapp}</td>
              <td>{value.depaby_skype}</td>
              <td>{value.depaby_telegram}</td>
              <td className='depaby_editButton'>
                <button onClick={event => {
                  setIndexEditContact(index);
                  setContactFormSignal(contactFormSignal + 1);
                }}>edit</button>
              </td>
              <td className='depaby_deleteButton'>
                <ContactDeleteButton
                  id={value.depaby_id}
                  contacts_read={contacts_read}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
