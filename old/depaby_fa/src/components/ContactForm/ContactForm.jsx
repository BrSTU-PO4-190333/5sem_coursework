function ContactForm(props) {
    return (
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
                    <td><ContactCaption data={props.data} /></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>depaby_description</td>
                    <td><ContactDescription data={props.data} /></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td>depaby_phone1</td>
                    <td><ContactPhone1 data={props.data} /></td>
                </tr>
                <tr>
                    <th>5</th>
                    <td>depaby_phone2</td>
                    <td><ContactPhone2 data={props.data} /></td>
                </tr>
                <tr>
                    <th>7</th>
                    <td>depaby_email1</td>
                    <td><ContactEmail1 data={props.data} /></td>
                </tr>
                <tr>
                    <th>8</th>
                    <td>depaby_email2</td>
                    <td><ContactEmail2 data={props.data} /></td>
                </tr>
                <tr>
                    <th>9</th>
                    <td>depaby_viber</td>
                    <td><ContactViber data={props.data} /></td>
                </tr>
                <tr>
                    <th>10</th>
                    <td>depaby_whatsapp</td>
                    <td><ContactWhatsapp data={props.data} /></td>
                </tr>
                <tr>
                    <th>11</th>
                    <td>depaby_skype</td>
                    <td><ContactSkype data={props.data} /></td>
                </tr>
                <tr>
                    <th>12</th>
                    <td>depaby_telegram</td>
                    <td><ContactTelegram data={props.data} /></td>
                </tr>
            </tbody>
        </table>
    );
}

function ContactCaption(props) {
    return (
        <input
            type="text"
            name="depaby_caption"
            defaultValue={props.data ? props.data.depaby_caption : ''}
        />
    );
}

function ContactDescription(props) {
    return (
        <input
            type="text"
            name="depaby_description"
            defaultValue={props.data ? props.data.depaby_description : ''}
        />
    );
}

function ContactPhone1(props) {
    return (
        <input
            type="text"
            name="depaby_phone1"
            defaultValue={props.data ? props.data.depaby_phone1 : ''}
        />
    );
}

function ContactPhone2(props) {
    return (
        <input
            type="text"
            name="depaby_phone2"
            defaultValue={props.data ? props.data.depaby_phone2 : ''}
        />
    );
}

function ContactEmail1(props) {
    return (
        <input
            type="text"
            name="depaby_email1"
            defaultValue={props.data ? props.data.depaby_email1 : ''}
        />
    );
}

function ContactEmail2(props) {
    return (
        <input
            type="text"
            name="depaby_email2"
            defaultValue={props.data ? props.data.depaby_email2 : ''}
        />
    );
}

function ContactViber(props) {
    return (
        <input
            type="text"
            name="depaby_viber"
            defaultValue={props.data ? props.data.depaby_viber : ''}
        />
    );
}

function ContactWhatsapp(props) {
    return (
        <input
            type="text"
            name="depaby_whatsapp"
            defaultValue={props.data ? props.data.depaby_whatsapp : ''}
        />
    );
}

function ContactSkype(props) {
    return (
        <input
            type="text"
            name="depaby_skype"
            defaultValue={props.data ? props.data.depaby_skype : ''}
        />
    );
}

function ContactTelegram(props) {
    return (
        <input
            type="text"
            name="depaby_telegram"
            defaultValue={props.data ? props.data.depaby_telegram : ''}
        />
    );
}

export default ContactForm;
