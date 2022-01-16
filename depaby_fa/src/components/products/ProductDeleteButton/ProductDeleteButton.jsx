import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import FetchProducts from '../../../scripts/FetchProducts';

function ProductDeleteButton(props) {
  async function product_delete(id) {
    const products_object = new FetchProducts();
    const response = await products_object.delete(
      {
        id: id,
      }
    );
    
    if (response === false) {
      alert(`Product not deleted (id = ${id})`);
      return;
    }

    if (response === true) {
      alert(`Product deleted with success (id = ${id})`);
      await props.products_read();
      return;
    }
  }

  return (
    <button onClick={event => product_delete(props.id)}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  );
}

export default ProductDeleteButton;
