function ProductCategoriesForm(props) {
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
                    <td><ProductCategoriesCaption data={props.data} /></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>depaby_product_category</td>
                    <td><ProductCategoriesProductCategory data={props.data} /></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>depaby_img_href</td>
                    <td><ProductCategoriesImgHref data={props.data} /></td>
                </tr>
            </tbody>
        </table>
    );
}

function ProductCategoriesCaption(props) {
    return (
        <input
            type="text"
            name="depaby_caption"
            defaultValue={props.data ? props.data.depaby_caption : ''}
        />
    );
}

function ProductCategoriesProductCategory(props) {
    return (
        <input
            type="text"
            name="depaby_product_category"
            defaultValue={props.data ? props.data.depaby_product_category : ''}
        />
    );
}

function ProductCategoriesImgHref(props) {
    return (
        <input
            type="text"
            name="depaby_img_href"
            defaultValue={props.data ? props.data.depaby_img_href : ''}
        />
    );
}

export default ProductCategoriesForm;
