import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUpload, faUndo } from '@fortawesome/free-solid-svg-icons';

import WindowForm from '../../WindowForm/WindowForm';
import get_form_data from '../../../scripts/get_form_data';
import FetchProduct from '../../../scripts/FetchProducts';

function ProductCreateButton(props) {
    function is_create_or_update() {
        return props.product_data.depaby_id ? 'update' : 'create';
    }

    function get_window_title() {
        if (is_create_or_update() === 'update') {
            return `Форма изменения продукта (id = ${props.product_data.depaby_id})`;
        }
        if (is_create_or_update() === 'create') {
            return 'Форма добавления продукта';
        }
    }

    return (
        <WindowForm
            button_title='Добавление продукта в БД через форму'
            button_icon={faPlus}
            window_title={get_window_title()}
            html={event => ProductCreateForm(props)}
            signal={props.signal}
            destructor={props.destructor}
        />
    );
}

function ProductCreateForm(props) {
    async function form_on_submit(event) {
        event.preventDefault();
        const form_data = get_form_data(event);
        console.log(form_data);

        const products_object = new FetchProduct();

        // Если индекс равен 'new', то добавить новый продукт
        if (props.table_id === 'new') {
            const flag = await products_object.create([form_data]);
            if (flag === false) {
                alert("Данные о продукте не добавились в БД");
                return;
            }
            alert("Данные о продукте добавлены в БД");
        }

        // Если это индекс, то изменить продукт по ид
        if (Number.isInteger(Number(props.table_id))) {
            const flag = await products_object.update(form_data, props.product_data.depaby_id);
            if (flag === false) {
                alert("Данные о продукте не изменились в БД");
                return;
            }
            alert("Данные о продукте изменены в БД");
        }
    }

    return (
        <form
            onSubmit={form_on_submit}
        >
            <div className="depaby_toolbar">
                <button className="btn btn-danger" type="reset" title="Сбросить форму">
                    <FontAwesomeIcon icon={faUndo} />
                </button>
                <button className="btn btn-success" type="sumbit" title="Добавить данные в базу данных">
                    <FontAwesomeIcon icon={faUpload} />
                </button>
            </div>
            <table className='depaby_table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Поле</th>
                        <th>Значение</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>depaby_img_href</td>
                        <td><ProductImgHref product_data={props.product_data} /></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>depaby_model</td>
                        <td><ProductModel product_data={props.product_data} /></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>depaby_name</td>
                        <td><ProductName product_data={props.product_data} /></td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>depaby_on_box</td>
                        <td><ProductOnBox product_data={props.product_data} /></td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>depaby_kg</td>
                        <td><ProductKg product_data={props.product_data} /></td>
                    </tr>
                    <tr>
                        <th>6</th>
                        <td>depaby_m3</td>
                        <td><ProductM3 product_data={props.product_data} /></td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>depaby_cost_byn</td>
                        <td><ProductCostByn product_data={props.product_data} /></td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <td>depaby_company</td>
                        <td><ProductCompany product_data={props.product_data} /></td>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td>depaby_category</td>
                        <td><ProductCategory product_data={props.product_data} /></td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

function ProductImgHref(props) {
    return (
        <input
            type="text"
            name="depaby_img_href"
            defaultValue={props.product_data ? props.product_data.depaby_img_href : ''}
        />
    );
}

function ProductModel(props) {
    return (
        <input
            type="text"
            name="depaby_model"
            defaultValue={props.product_data ? props.product_data.depaby_model : ''}
        />
    );
}

function ProductName(props) {
    return (
        <input
            type="text"
            name="depaby_name"
            defaultValue={props.product_data ? props.product_data.depaby_name : ''}
        />
    );
}

function ProductOnBox(props) {
    return (
        <input
            type="number"
            name="depaby_on_box"
            min="0"
            defaultValue={props.product_data ? props.product_data.depaby_on_box : '0'}
        />
    );
}

function ProductKg(props) {
    return (
        <input
            type="number"
            name="depaby_kg"
            min="0"
            step="0.001"
            defaultValue={props.product_data ? props.product_data.depaby_kg : '0'}
        />
    );
}

function ProductM3(props) {
    return (
        <input
            type="number"
            name="depaby_m3"
            min="0"
            step="0.0001"
            defaultValue={props.product_data ? props.product_data.depaby_m3 : '0'}
        />
    );
}

function ProductCostByn(props) {
    return (
        <input
            type="number"
            name="depaby_cost_byn"
            min="0"
            step="0.01"
            defaultValue={props.product_data ? props.product_data.depaby_cost_byn : '0'}
        />
    );
}

function ProductCompany(props) {
    return (
        <input
            type="text"
            name="depaby_company"
            defaultValue={props.product_data ? props.product_data.depaby_company : ''}
        />
    );
}

function ProductCategory(props) {
    return (
        <input
            type="text"
            name="depaby_category"
            defaultValue={props.product_data ? props.product_data.depaby_category : ''}
        />
    );
}

export default ProductCreateButton;
