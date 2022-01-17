import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function DeleteTableButton(props) {
    
    // Очищает талицу
    async function deleteTable() {
        // Создаём экземпляр класса
        const class_instance = new props.FetchClass();
        // Вызываем у класса метод delete
        const response = await class_instance.delete();
        // Если очищено не удачно
        if (response === false) {
            alert(`Таблица не очищена с успехом`);
            return;
        }
        // Если очищено с успехом
        if (response === true) {
            alert(`Таблица очищена успешно`);
            await props.read();
            return;
        }
    }

    return (
        <button
            onClick={deleteTable}
            title="Удалить таблицу"
        >
            <FontAwesomeIcon icon={faTrashAlt} />
        </button>
    )
}

export default DeleteTableButton;
