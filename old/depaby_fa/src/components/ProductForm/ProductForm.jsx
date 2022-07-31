function ProductForm(props) {
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
                    <td>depaby_img_href</td>
                    <td><ProductImgHref data={props.data} /></td>
                </tr>
                <tr>
                    <th>2</th>
                    <td>depaby_model</td>
                    <td><ProductModel data={props.data} /></td>
                </tr>
                <tr>
                    <th>3</th>
                    <td>depaby_name</td>
                    <td><ProductName data={props.data} /></td>
                </tr>
                <tr>
                    <th>4</th>
                    <td>depaby_on_box</td>
                    <td><ProductOnBox data={props.data} /></td>
                </tr>
                <tr>
                    <th>5</th>
                    <td>depaby_kg</td>
                    <td><ProductKg data={props.data} /></td>
                </tr>
                <tr>
                    <th>6</th>
                    <td>depaby_m3</td>
                    <td><ProductM3 data={props.data} /></td>
                </tr>
                <tr>
                    <th>7</th>
                    <td>depaby_cost_byn</td>
                    <td><ProductCostByn data={props.data} /></td>
                </tr>
                <tr>
                    <th>8</th>
                    <td>depaby_company</td>
                    <td><ProductCompany data={props.data} /></td>
                </tr>
                <tr>
                    <th>9</th>
                    <td>depaby_category</td>
                    <td><ProductCategory data={props.data} /></td>
                </tr>
            </tbody>
        </table>
    );
}

function ProductImgHref(props) {
    return (
        <input
            type="text"
            name="depaby_img_href"
            defaultValue={props.data ? props.data.depaby_img_href : ''}
        />
    );
}

function ProductModel(props) {
    return (
        <input
            type="text"
            name="depaby_model"
            defaultValue={props.data ? props.data.depaby_model : ''}
        />
    );
}

function ProductName(props) {
    return (
        <input
            type="text"
            name="depaby_name"
            defaultValue={props.data ? props.data.depaby_name : ''}
        />
    );
}

function ProductOnBox(props) {
    return (
        <input
            type="number"
            name="depaby_on_box"
            min="0"
            defaultValue={props.data ? props.data.depaby_on_box : '0'}
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
            defaultValue={props.data ? props.data.depaby_kg : '0'}
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
            defaultValue={props.data ? props.data.depaby_m3 : '0'}
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
            defaultValue={props.data ? props.data.depaby_cost_byn : '0'}
        />
    );
}

function ProductCompany(props) {
    return (
        <input
            type="text"
            name="depaby_company"
            defaultValue={props.data ? props.data.depaby_company : ''}
        />
    );
}

function ProductCategory(props) {
    return (
        <input
            type="text"
            name="depaby_category"
            defaultValue={props.data ? props.data.depaby_category : ''}
        />
    );
}

export default ProductForm;
