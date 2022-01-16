import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import FetchContacts from '../../../scripts/FetchContacts';

function ContactsLoadButton() {
    function contacts_load(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async function () {
            const GPI_STR = reader.result;
            let contacts_array;

            try {
                contacts_array = JSON.parse(GPI_STR);
            }
            catch {
                alert("Файл не JSON формата");
                return;
            }

            if (contacts_array.length == null) {
                alert("Файл не имеет массив структур!");
                return;
            }

            const contacts_object = new FetchContacts();
            const flag = await contacts_object.create(contacts_array);

            if (flag === false) {
                alert("Ошибка на сервере");
                return;
            }

            alert("Контакты добавлены в БД с успехом");
        };
    }

    return (
        <button>
            <label htmlFor="depaby_contacts_load">
                <FontAwesomeIcon icon={faFolderOpen} />
            </label>
            <input
                type="file"
                onChange={event => contacts_load(event)}
                id="depaby_contacts_load"
                style={{
                    display: 'none'
                }}
            />
        </button>
    );
}

export default ContactsLoadButton;
