import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function DeleteButton(props) {

    // Удаляет элемент по ИД
    async function del(id) {
        // Создаём экземпляр класса
        const class_instance = new props.FetchClass();
        // Вызываем у класса метод delete
        const response = await class_instance.delete(
            {
                id: id,
            }
        );
        // Если удалиляся не удачно
        if (response === false) {
            alert(`Не удалился (id = ${id})`);
            return;
        }
        // Если удалился удачно
        if (response === true) {
            alert(`Удален успешно (id = ${id})`);
            await props.read();
            return;
        }
    }

    return (
        <button onClick={event => del(props.id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
        </button>
    );
}

export default DeleteButton;
