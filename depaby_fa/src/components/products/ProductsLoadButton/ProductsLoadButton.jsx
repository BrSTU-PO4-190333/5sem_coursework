import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

import FetchProducts from '../../../scripts/FetchProducts';

function ProductsLoadButton() {
    function products_load(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async function () {
            const GPI_STR = reader.result;
            let products_array;

            try {
                products_array = JSON.parse(GPI_STR);
            }
            catch {
                alert("Файл не JSON формата");
                return;
            }

            if (products_array.length == null) {
                alert("Файл не имеет массив структур!");
                return;
            }

            const products_object = new FetchProducts();
            const flag = await products_object.create(products_array);

            if (flag === false) {
                alert("Ошибка на сервере");
                return;
            }

            alert("Продукты добавлены в БД с успехом");
        };
    }

    return (
        <button>
            <label htmlFor="depaby_products_load">
                <FontAwesomeIcon icon={faFolderOpen} />
            </label>
            <input
                type="file"
                onChange={event => products_load(event)}
                id="depaby_products_load"
                style={{
                    display: 'none'
                }}
            />
        </button>
    );
}

export default ProductsLoadButton;
