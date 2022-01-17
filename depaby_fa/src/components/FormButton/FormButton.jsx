import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUndo, faUpload } from '@fortawesome/free-solid-svg-icons';

import WindowForm from './../WindowForm/WindowForm';
import get_form_data from '../../scripts/get_form_data';

function FormButton(props) {
    function is_create_or_update() {
        return props.data.depaby_id ? 'update' : 'create';
    }

    function get_window_title() {
        if (is_create_or_update() === 'update') {
            return `Форма изменения (id = ${props.data.depaby_id})`;
        }
        if (is_create_or_update() === 'create') {
            return 'Форма добавления';
        }
    }

    return (
        <WindowForm
            button_title='Форма добавления'
            button_icon={faPlus}
            window_title={get_window_title()}
            html={event => Form(props)}
            signal={props.signal}
            destructor={props.destructor}
        />
    );
}

function Form(props) {

    async function form_on_submit(event) {
        event.preventDefault();
        const form_data = get_form_data(event);
        console.log(form_data);

        const class_instance = new props.FetchClass();
        
        // Если индекс равен 'new', то добавить новый контакт
        if (props.id_html_table === 'new') {
            const flag = await class_instance.create([form_data]);
            if (flag === false) {
                alert("Новый данные не добавились в БД");
                return;
            }
            alert("Новый данные добавлены в БД");
        }

        // Если это индекс, то изменить контакт по ид
        if (Number.isInteger(Number(props.id_html_table))) {
            const flag = await class_instance.update(form_data, props.data.depaby_id);
            if (flag === false) {
                alert("Данные не изменились в БД");
                return;
            }
            alert("Данные изменены в БД");
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
            <props.FormTable data={props.data} />
        </form>
    );
}

export default FormButton;
