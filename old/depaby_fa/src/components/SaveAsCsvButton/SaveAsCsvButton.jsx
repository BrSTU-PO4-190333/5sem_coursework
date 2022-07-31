import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons';

import download_file from "../../scripts/download_file";

function SaveAsCsvButton(props) {

    // Функция, сохраняет массив в CSV формате
    async function save_as_csv(array = []) {
        // Если массив пустой
        if (array.length === 0) {
            alert("Нет данных в таблице. Что сохранять то?");
            return;
        }

        let file_txt = "";
        // Получаем ключи объекта первого элемента массива
        const keys = Object.keys(array[0]);

        // Добавляем ключи объекта в кавычках двойных через запятую
        file_txt += `"${keys.join('", "')}"\n`;

        // Проходимся по массиву
        array.forEach(function (obj) {
            // Добавляем значения ключей в двойных кавычках через запятую
            keys.forEach(function (val) {
                file_txt += `"${obj[val]}", `;
            });
            file_txt += `\n`;
        })

        const class_istance = new download_file();
        class_istance.download_file(file_txt, `${props.table_name}.csv`);
    }

    return (
        <button onClick={event => save_as_csv(props.array)} title="Сохранить в CSV">
            <FontAwesomeIcon icon={faFileCsv} />
        </button>
    )
}

export default SaveAsCsvButton;
