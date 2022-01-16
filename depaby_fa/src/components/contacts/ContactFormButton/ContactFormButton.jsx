import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUpload, faUndo } from '@fortawesome/free-solid-svg-icons';

import WindowForm from '../../WindowForm/WindowForm';
import get_form_data from '../../../scripts/get_form_data';
import FetchContact from '../../../scripts/FetchContacts';

function ContactCreateButton(props) {
    function is_create_or_update() {
        return props.contact_data.depaby_id ? 'update' : 'create';
    }

    function get_window_title() {
        if (is_create_or_update() === 'update') {
            return `Форма изменения контакта (id = ${props.contact_data.depaby_id})`;
        }
        if (is_create_or_update() === 'create') {
            return 'Форма добавления контакта';
        }
    }

    return (
        <WindowForm
            button_title='Добавление контакта в БД через форму'
            button_icon={faPlus}
            window_title={get_window_title()}
            html={event => ContactCreateForm(props)}
            signal={props.signal}
            destructor={props.destructor}
        />
    );
}

function ContactCreateForm(props) {
    async function form_on_submit(event) {
        event.preventDefault();
        const form_data = get_form_data(event);
        console.log(form_data);

        const contacts_object = new FetchContact();

        // Если индекс равен 'new', то добавить новый контакт
        if (props.table_id === 'new') {
            const flag = await contacts_object.create([form_data]);
            if (flag === false) {
                alert("Данные о контакте не добавились в БД");
                return;
            }
            alert("Данные о контакте добавлены в БД");
        }

        // Если это индекс, то изменить контакт по ид
        if (Number.isInteger(Number(props.table_id))) {
            const flag = await contacts_object.update(form_data, props.contact_data.depaby_id);
            if (flag === false) {
                alert("Данные о контакте не изменились в БД");
                return;
            }
            alert("Данные о контакте изменены в БД");
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
                        <td><ContactCaption contact_data={props.contact_data} /></td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>depaby_description</td>
                        <td><ContactDescription contact_data={props.contact_data} /></td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>depaby_phone1</td>
                        <td><ContactPhone1 contact_data={props.contact_data} /></td>
                    </tr>
                    <tr>
                        <th>5</th>
                        <td>depaby_phone2</td>
                        <td><ContactPhone2 contact_data={props.contact_data} /></td>
                    </tr>
                    <tr>
                        <th>7</th>
                        <td>depaby_email1</td>
                        <td><ContactEmail1 contact_data={props.contact_data} /></td>
                    </tr>
                    <tr>
                        <th>8</th>
                        <td>depaby_email2</td>
                        <td><ContactEmail2 contact_data={props.contact_data} /></td>
                    </tr>
                    <tr>
                        <th>9</th>
                        <td>depaby_viber</td>
                        <td><ContactViber contact_data={props.contact_data} /></td>
                    </tr>
                    <tr>
                        <th>10</th>
                        <td>depaby_whatsapp</td>
                        <td><ContactWhatsapp contact_data={props.contact_data} /></td>
                    </tr>
                    <tr>
                        <th>11</th>
                        <td>depaby_skype</td>
                        <td><ContactSkype contact_data={props.contact_data} /></td>
                    </tr>
                    <tr>
                        <th>12</th>
                        <td>depaby_telegram</td>
                        <td><ContactTelegram contact_data={props.contact_data} /></td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}

function ContactCaption(props) {
    return (
        <input
            type="text"
            name="depaby_caption"
            defaultValue={props.contact_data ? props.contact_data.depaby_caption : ''}
        />
    );
}

function ContactDescription(props) {
    return (
        <input
            type="text"
            name="depaby_description"
            defaultValue={props.contact_data ? props.contact_data.depaby_description : ''}
        />
    );
}

function ContactPhone1(props) {
    return (
        <input
            type="text"
            name="depaby_phone1"
            defaultValue={props.contact_data ? props.contact_data.depaby_phone1 : ''}
        />
    );
}

function ContactPhone2(props) {
    return (
        <input
            type="text"
            name="depaby_phone2"
            defaultValue={props.contact_data ? props.contact_data.depaby_phone2 : ''}
        />
    );
}

function ContactEmail1(props) {
    return (
        <input
            type="text"
            name="depaby_email1"
            defaultValue={props.contact_data ? props.contact_data.depaby_email1 : ''}
        />
    );
}

function ContactEmail2(props) {
    return (
        <input
            type="text"
            name="depaby_email2"
            defaultValue={props.contact_data ? props.contact_data.depaby_email2 : ''}
        />
    );
}

function ContactViber(props) {
    return (
        <input
            type="text"
            name="depaby_viber"
            defaultValue={props.contact_data ? props.contact_data.depaby_viber : ''}
        />
    );
}

function ContactWhatsapp(props) {
    return (
        <input
            type="text"
            name="depaby_whatsapp"
            defaultValue={props.contact_data ? props.contact_data.depaby_whatsapp : ''}
        />
    );
}

function ContactSkype(props) {
    return (
        <input
            type="text"
            name="depaby_skype"
            defaultValue={props.contact_data ? props.contact_data.depaby_skype : ''}
        />
    );
}

function ContactTelegram(props) {
    return (
        <input
            type="text"
            name="depaby_telegram"
            defaultValue={props.contact_data ? props.contact_data.depaby_telegram : ''}
        />
    );
}

export default ContactCreateButton;
