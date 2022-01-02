import { useState } from 'react';
import gpi_class_FetchProducts from './../../scripts/gpi_class_FetchProducts';
import gpi_func_get_form_as_object from "./../../scripts/gpi_func_get_form_as_object";

function GpiAddProduct() {
    const [gpiImgPath, setGpiImgPath] = useState("");

    async function gpi_add_product(event) {
        event.preventDefault();

        const gpi_data = gpi_func_get_form_as_object(event);
        const gpi_array = [gpi_data];
        console.log(gpi_array);

        const gpi_obj = new gpi_class_FetchProducts();
        const gpi_status = await gpi_obj.gpi_add_products(gpi_array);

        if (gpi_status === false) {
            return;
        }

        alert("Added element");
    }

    return (
        <form
            onSubmit={gpi_add_product}
            className="container"
        >
            <h2>Add product</h2>

            {/* Img */}
            <div className="mb-3">
                <img src={gpiImgPath} alt="Img not found" />
            </div>

            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Img"
                    type="text"
                    name="gpi_img_path"
                    value={gpiImgPath}
                    onChange={event => {
                        console.log(event.target.value);
                        setGpiImgPath(event.target.value)
                    }}
                />
                <label htmlFor="Products__add_Img">Img</label>
            </div>

            {/* Model */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Model"
                    type="text"
                    name="gpi_model"
                />
                <label htmlFor="Products__add_Model">Model</label>
            </div>

            {/* Name */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Name"
                    type="text"
                    name="gpi_name"
                />
                <label htmlFor="Products__add_Name">Name</label>
            </div>

            {/* OnBox */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_OnBox"
                    type="number"
                    name="gpi_on_box"
                    min="0"
                />
                <label htmlFor="Products__add_OnBox">OnBox</label>
            </div>

            {/* KG */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_KG"
                    type="number"
                    name="gpi_kg"
                    min="0"
                    step="0.001"
                />
                <label htmlFor="Products__add_KG">KG</label>
            </div>

            {/* M3 */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_M3"
                    type="number"
                    name="gpi_m3"
                    min="0"
                    step="0.0001"
                />
                <label htmlFor="Products__add_M3">M3</label>
            </div>

            {/* CostBYN */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_CostBYN"
                    type="number"
                    name="gpi_cost_byn"
                    min="0"
                    step="0.01"
                />
                <label htmlFor="Products__add_CostBYN">CostBYN</label>
            </div>

            {/* Company */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Company"
                    type="text"
                    name="gpi_company"
                />
                <label htmlFor="Products__add_Company">Company</label>
            </div>

            {/* Category */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Category"
                    type="text"
                    name="gpi_category"
                />
                <label htmlFor="Products__add_Category">Category</label>
            </div>

            {/* OK */}
            <div className="mb-3 btn-group">
                <button className="btn btn-danger" type="reset">
                    Reset
                </button>
                <button className="btn btn-success" type="sumbit">
                    Add
                </button>
            </div>
        </form>
    );
}

export default GpiAddProduct;