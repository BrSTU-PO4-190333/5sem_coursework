import { useEffect, useState } from "react";
import { useParams } from "react-router";
import gpi_class_FetchProducts from "./../../scripts/gpi_class_FetchProducts";
import gpi_func_get_form_as_object from "./../../scripts/gpi_func_get_form_as_object";

function GpiEditProduct() {
    const [gpiImgSrc, setGpiImgSrc] = useState("");
    const [gpiProductArray, setGpiProductArray] = useState([{}]);
    let { editID } = useParams();

    useEffect(() => {
        gpi_get_product_by_id(editID);
    }, [editID]);

    async function gpi_get_product_by_id(gpi_id) {
        const gpi_obj = new gpi_class_FetchProducts();
        const gpi_res = await gpi_obj.gpi_get_products(false, gpi_id);
        setGpiProductArray(gpi_res);
    }

    async function gpi_edit_product(event) {
        event.preventDefault();
        const gpi_data = gpi_func_get_form_as_object(event);
        console.log(gpi_data);

        const gpi_obj = new gpi_class_FetchProducts();
        const gpi_status = await gpi_obj.gpi_update_product(gpi_data, editID);

        if (gpi_status === false) {
            return;
        }

        alert("Product edited with success");
    }

    return (
        <form
            onSubmit={gpi_edit_product}
            className="container"
        >
            <h2>Edit product</h2>

            {/* ID */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_ID"
                    type="text"
                    value={editID}
                    readOnly
                />
                <label htmlFor="Products__add_ID">ID</label>
            </div>

            {/* Img */}
            <div className="mb-3">
                <img src={gpiImgSrc} alt="Img not found" />
            </div>

            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Img"
                    type="text"
                    name="gpi_img_path"
                    defaultValue={gpiProductArray[0].gpi_img_path}
                    onChange={event => {
                        console.log(event.target.value);
                        setGpiImgSrc(event.target.value)
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
                    defaultValue={gpiProductArray[0].gpi_model}
                />
                <label htmlFor="Products__add_Model">Model</label>
            </div>

            {/* Name */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Name"
                    type="text"
                    name="gpi_name"
                    defaultValue={gpiProductArray[0].gpi_name}
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
                    defaultValue={gpiProductArray[0].gpi_on_box}
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
                    defaultValue={gpiProductArray[0].gpi_kg}
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
                    defaultValue={gpiProductArray[0].gpi_m3}
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
                    defaultValue={gpiProductArray[0].gpi_cost_byn}
                />
                <label htmlFor="Products__add_CostBYN">CostBYN</label>
            </div>

            {/* Company */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Company"
                    type="text"
                    name="gpi_company"
                    defaultValue={gpiProductArray[0].gpi_company}
                />
                <label htmlFor="Products__add_Company">Company</label>
            </div>

            {/* Category */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Category"
                    type="text"
                    name="gpi_category"
                    defaultValue={gpiProductArray[0].gpi_category}
                />
                <label htmlFor="Products__add_Category">Category</label>
            </div>

            {/* OK */}
            <div className="mb-3 btn-group">
                <button className="btn btn-danger" type="reset">
                    Reset
                </button>
                <button className="btn btn-success" type="sumbit">
                    Edit
                </button>
            </div>
        </form>
    );
}

export default GpiEditProduct;
