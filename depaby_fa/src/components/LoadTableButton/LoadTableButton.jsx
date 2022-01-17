import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

function LoadTableButton(props) {
    return (
        <button onClick={props.read} title="Загрузить таблицу с сервера">
            <FontAwesomeIcon icon={faSync} />
        </button>
    );
}

export default LoadTableButton;
