import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import FetchDocuments from '../../../scripts/FetchDocuments';

function DocumentsLoadButton() {
    function documents_load(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async function () {
            const GPI_STR = reader.result;
            let documents_array;

            try {
                documents_array = JSON.parse(GPI_STR);
            }
            catch {
                alert("Файл не JSON формата");
                return;
            }

            if (documents_array.length == null) {
                alert("Файл не имеет массив структур!");
                return;
            }

            const documents_object = new FetchDocuments();
            const flag = await documents_object.create(documents_array);

            if (flag === false) {
                alert("Ошибка на сервере");
                return;
            }

            alert("Продукты добавлены в БД с успехом");
        };
    }

    return (
        <button>
            <label htmlFor="depaby_documents_load">
                <FontAwesomeIcon icon={faFolderOpen} />
            </label>
            <input
                type="file"
                onChange={event => documents_load(event)}
                id="depaby_documents_load"
                style={{
                    display: 'none'
                }}
            />
        </button>
    );
}

export default DocumentsLoadButton;
