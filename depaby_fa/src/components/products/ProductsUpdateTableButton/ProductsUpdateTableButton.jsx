import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

function ProductsUpdateTableButton(props) {
  return (
    <button
      onClick={props.products_read}
      title="Загрузить таблицу с сервера"
    >
      <FontAwesomeIcon icon={faSync} />
    </button>
  );
}

export default ProductsUpdateTableButton;
