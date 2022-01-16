import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUpload, faUndo } from '@fortawesome/free-solid-svg-icons';

import WindowForm from '../../WindowForm/WindowForm';
import get_form_data from '../../../scripts/get_form_data';
import FetchDocument from '../../../scripts/FetchDocuments';

function DocumentCreateButton(props) {
    function is_create_or_update() {
        return props.document_data.depaby_id ? 'update' : 'create';
    }

    function get_window_title() {
        if (is_create_or_update() === 'update') {
            return `Форма изменения документа (id = ${props.document_data.depaby_id})`;
        }
        if (is_create_or_update() === 'create') {
            return 'Форма добавления документа';
        }
    }

    return (
        <WindowForm
            button_title='Добавление документа в БД через форму'
            button_icon={faPlus}
            window_title={get_window_title()}
            html={event => DocumentCreateForm(props)}
            signal={props.signal}
            destructor={props.destructor}
        />
    );
}

function DocumentCreateForm(props) {
    async function form_on_submit(event) {
        event.preventDefault();
        const form_data = get_form_data(event);
        console.log(form_data);

        const documents_object = new FetchDocument();

        // Если индекс равен 'new', то добавить новый продукт
        if (props.table_id === 'new') {
            const flag = await documents_object.create([form_data]);
            if (flag === false) {
                alert("Данные о документе не добавились в БД");
                return;
            }
            alert("Данные о документе добавлены в БД");
        }

        // Если это индекс, то изменить продукт по ид
        if (Number.isInteger(Number(props.table_id))) {
            const flag = await documents_object.update(form_data, props.document_data.depaby_id);
            if (flag === false) {
                alert("Данные о документе не изменились в БД");
                return;
            }
            alert("Данные о документе изменены в БД");
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
                        <td>depaby_caption</td>
                        <td><DocumentCaption document_data={props.document_data} /></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>depaby_href</td>
                        <td><DocumentHref document_data={props.document_data} /></td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>depaby_page_category</td>
                        <td><DocumentPageCategory document_data={props.document_data} /></td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

function DocumentCaption(props) {
    return (
        <input
            type="text"
            name="depaby_caption"
            defaultValue={props.document_data ? props.document_data.depaby_caption : ''}
        />
    );
}

function DocumentHref(props) {
    return (
        <input
            type="text"
            name="depaby_href"
            defaultValue={props.document_data ? props.document_data.depaby_href : ''}
        />
    );
}

function DocumentPageCategory(props) {
    return (
        <input
            type="text"
            name="depaby_page_category"
            defaultValue={props.document_data ? props.document_data.depaby_page_category : ''}
        />
    );
}

export default DocumentCreateButton;
