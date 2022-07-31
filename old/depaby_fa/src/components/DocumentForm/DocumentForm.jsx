function DocumentForm(props) {
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
                    <td><DocumentCaption data={props.data} /></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>depaby_href</td>
                    <td><DocumentHref data={props.data} /></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>depaby_page_category</td>
                    <td><DocumentPageCategory data={props.data} /></td>
                </tr>
            </tbody>
        </table>
    );
}

function DocumentCaption(props) {
    return (
        <input
            type="text"
            name="depaby_caption"
            defaultValue={props.data ? props.data.depaby_caption : ''}
        />
    );
}

function DocumentHref(props) {
    return (
        <input
            type="text"
            name="depaby_href"
            defaultValue={props.data ? props.data.depaby_href : ''}
        />
    );
}

function DocumentPageCategory(props) {
    return (
        <input
            type="text"
            name="depaby_page_category"
            defaultValue={props.data ? props.data.depaby_page_category : ''}
        />
    );
}

export default DocumentForm;
