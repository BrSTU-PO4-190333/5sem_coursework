import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import FetchProducts from "../../../scripts/FetchProducts";

function ProductsDeleteButton(props) {
  async function products_delete() {
    const products_object = new FetchProducts();
    const response = await products_object.delete();

    if (response === false) {
      alert(`Table products not deleted`);
      return;
    }

    if (response === true) {
      alert(`Table products deleted with success`);
      await props.products_read();
      return;
    }
  }

  return (
    <button
      onClick={products_delete}
      title="Удалить таблицу"
    >
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  )
}

export default ProductsDeleteButton;
