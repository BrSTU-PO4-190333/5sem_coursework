import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

function UploadJsonButton(props) {
    function upload_json(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async function () {
            const file_txt = reader.result;
            let array;

            try {
                array = JSON.parse(file_txt);
            }
            catch {
                alert("Файл не JSON формата");
                return;
            }

            if (array.length == null) {
                alert("Файл не имеет массив структур!");
                return;
            }

            const class_instance = new props.FetchClass();
            const flag = await class_instance.create(array);

            if (flag === false) {
                alert("Данные с файла не загрузиись в таблицу");
                return;
            }

            alert("Данные с файла загружены в таблицу с успехом");
        };
    }

    return (
        <button>
            <label htmlFor="depaby_upload_json">
                <FontAwesomeIcon icon={faFolderOpen} />
            </label>
            <input
                type="file"
                onChange={event => upload_json(event)}
                id="depaby_upload_json"
                style={{
                    display: 'none'
                }}
            />
        </button>
    );
}

export default UploadJsonButton;
