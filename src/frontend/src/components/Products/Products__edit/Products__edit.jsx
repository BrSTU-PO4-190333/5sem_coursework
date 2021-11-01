import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Product from "../../../scripts/Product";

export default function Products__edit() {
    const [imgSrc, setImgSrc] = useState("");
    const [arr, setArr] = useState([{}]);
    let { editID } = useParams();

    useEffect(() => {
        getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editID]);

    async function getProduct() {
        const PRD = new Product();
        const ARR = await PRD.get({id: editID});

        if (typeof(ARR.length) !== "undefined") {
            setArr(ARR);
        }
        else {
            setArr([{}]);
        }
        
        console.log(ARR);
    }

    function editProduct(event) {
        event.preventDefault();
        const GPI_FORM_DATA = gpi_get_form_data(event.target);

        const PRD = new Product();
        PRD.edit(editID, GPI_FORM_DATA);
    }

    function gpi_get_form_data(FORM_OBJ) {
        const OBJ_KEY = Object.keys(FORM_OBJ);
        let gpi_form_data = {};

        OBJ_KEY.forEach(val => {
            const number = Number(val);
            if (Number.isInteger(number)) {
                const key = FORM_OBJ[val].name;
                if (key !== "") {
                    const value = FORM_OBJ[val].value;
                    gpi_form_data[key] = value;
                }
            }
        });

        return gpi_form_data;
    }

    return (
        <form
            onSubmit={editProduct}
            className={`container `}
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
                <img src={imgSrc} alt="Img not found" />
            </div>

            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Img"
                    type="text" name="Img"
                    placeholder="https://ooodepa.github.io/ooodepa-products/de-pa-electric/accessories/11101.png"
                    defaultValue={arr[0].Img} onChange={event => { console.log(event.target.value); setImgSrc(event.target.value) }}
                />
                <label htmlFor="Products__add_Img">Img</label>
            </div>

            {/* Model */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Model"
                    type="text" name="Model"
                    placeholder="11101"
                    defaultValue={arr[0].Model}
                />
                <label htmlFor="Products__add_Model">Model</label>
            </div>

            {/* Name */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Name"
                    type="text" name="Name"
                    placeholder="Вилка прямая с заземлением"
                    defaultValue={arr[0].Name}
                />
                <label htmlFor="Products__add_Name">Name</label>
            </div>

            {/* OnBox */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_OnBox"
                    type="number" name="OnBox" min="0"
                    placeholder="500"
                    defaultValue={arr[0].OnBox}
                />
                <label htmlFor="Products__add_OnBox">OnBox</label>
            </div>

            {/* KG */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_KG"
                    type="number" name="KG" min="0" step="0.001"
                    placeholder="16.45"
                    defaultValue={arr[0].KG}
                />
                <label htmlFor="Products__add_KG">KG</label>
            </div>

            {/* M3 */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_M3"
                    type="number" name="M3" min="0" step="0.0001"
                    placeholder="0.0706"
                    defaultValue={arr[0].M3}
                />
                <label htmlFor="Products__add_M3">M3</label>
            </div>

            {/* CostBYN */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_CostBYN"
                    type="number" name="CostBYN" min="0" step="0.01"
                    placeholder="1.94"
                    defaultValue={arr[0].CostBYN}
                />
                <label htmlFor="Products__add_CostBYN">CostBYN</label>
            </div>

            {/* Company */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Company"
                    type="text" name="Company"
                    placeholder="de-pa"
                    defaultValue={arr[0].Company}
                />
                <label htmlFor="Products__add_Company">Company</label>
            </div>

            {/* Category */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Category"
                    type="text" name="Category"
                    placeholder="accessories"
                    defaultValue={arr[0].Category}
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
