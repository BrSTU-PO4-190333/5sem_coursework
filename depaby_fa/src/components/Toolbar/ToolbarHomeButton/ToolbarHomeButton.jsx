import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function ToolbarHomeButton() {
    return (
        <button title="Вернуться в главвное меню">
            <Link to="/">
                <FontAwesomeIcon icon={faHome} />
            </Link>
        </button>
    );
}

export default ToolbarHomeButton;
