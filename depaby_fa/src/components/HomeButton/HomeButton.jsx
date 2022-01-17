import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function HomeButton() {
    return (
        <button title="Вернуться в главное меню">
            <Link to="/">
                <FontAwesomeIcon icon={faHome} />
            </Link>
        </button>
    );
}

export default HomeButton;
