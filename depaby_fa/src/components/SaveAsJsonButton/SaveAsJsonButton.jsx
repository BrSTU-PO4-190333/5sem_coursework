import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

import download_file from "./../../scripts/download_file";

function SaveAsJsonButton(props) {

    // Функция, которая сохранит
    async function save_as_json(array = []) {
        // Если массив пустой
        if (array.length === 0) {
            alert("Нет данных в таблице. Что сохранять то?");
            return;
        }
        // Сохраняем JS объект как строку
        const file_text = JSON.stringify(array, null, 4);
        // Создаем экземпляр класса
        const class_instance = new download_file();
        // Вызываем метод download_file
        class_instance.download_file(file_text, `${props.table_name}.json`);
    }

    return (
        <button onClick={event => save_as_json(props.array)} title="Сохранить в JSON">
            <FontAwesomeIcon icon={faFileDownload} />
        </button>
    )
}

export default SaveAsJsonButton;
