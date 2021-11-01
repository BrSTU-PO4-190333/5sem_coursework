import axios from 'axios';
import { useState } from 'react';

export default function Products__add() {
    const [imgSrc, setImgSrc] = useState("https://ooodepa.github.io/ooodepa-products/de-pa-electric/accessories/11101.png");

    async function gpi_add(event) {
        try {
            event.preventDefault();
            const gpi_URL = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/gpi_add_products`;
            const gpi_PRODUCT_DATA = gpi_get_object(event);
            const res = await axios.post(gpi_URL, gpi_PRODUCT_DATA);

            if (res.data.err) {
                alert(`Error! \nCode: ${res.data.err.code} \nMessage: ${res.data.err.message}`);
                return;
            }

            console.log(res);

            if (res.data === "success") {
                alert("Added product");
            }
        }
        catch (err) {
            console.error(err);
            alert("Err connect API")
        }
    }

    function gpi_get_object(event) {
        const obj = event.target;
        const obj_keys = Object.keys(obj);

        let gpi_product_data = {
            login: localStorage.getItem("login"),
            password: localStorage.getItem("password"),
            KEYS: [],
            VALUES: [[]],
        };

        obj_keys.forEach(val => {
            const number = Number(val);
            if (Number.isInteger(number)) {
                const key = obj[val].name;
                if (key !== "") {
                    gpi_product_data["KEYS"].push(key);

                    const value = obj[val].value;
                    gpi_product_data["VALUES"][0].push(value);
                }
            }
        });

        console.log(gpi_product_data)

        return gpi_product_data;
    }

    return (
        <form
            onSubmit={gpi_add}
            className={`container `}
        >
            <h2>Add product</h2>

            {/* Img */}
            <div className="mb-3">
                <img src={imgSrc} alt="Img not found" />
            </div>

            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Img"
                    type="text" name="Img"
                    placeholder="https://ooodepa.github.io/ooodepa-products/de-pa-electric/accessories/11101.png"
                    value={imgSrc} onChange={event => { console.log(event.target.value); setImgSrc(event.target.value) }}
                />
                <label htmlFor="Products__add_Img">Img</label>
            </div>

            {/* Model */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Model"
                    type="text" name="Model"
                    placeholder="11101"
                    defaultValue="11101"
                />
                <label htmlFor="Products__add_Model">Model</label>
            </div>

            {/* Name */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Name"
                    type="text" name="Name"
                    placeholder="Вилка прямая с заземлением"
                    defaultValue="Вилка прямая с заземлением"
                />
                <label htmlFor="Products__add_Name">Name</label>
            </div>

            {/* OnBox */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_OnBox"
                    type="number" name="OnBox" min="0"
                    placeholder="500"
                    defaultValue="500"
                />
                <label htmlFor="Products__add_OnBox">OnBox</label>
            </div>

            {/* KG */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_KG"
                    type="number" name="KG" min="0" step="0.001"
                    placeholder="16.45"
                    defaultValue="16.45"
                />
                <label htmlFor="Products__add_KG">KG</label>
            </div>

            {/* M3 */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_M3"
                    type="number" name="M3" min="0" step="0.0001"
                    placeholder="0.0706"
                    defaultValue="0.0706"
                />
                <label htmlFor="Products__add_M3">M3</label>
            </div>

            {/* CostBYN */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_CostBYN"
                    type="number" name="CostBYN" min="0" step="0.01"
                    placeholder="1.94"
                    defaultValue="1.94"
                />
                <label htmlFor="Products__add_CostBYN">CostBYN</label>
            </div>

            {/* Company */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Company"
                    type="text" name="Company"
                    placeholder="de-pa"
                    defaultValue="de-pa"
                />
                <label htmlFor="Products__add_Company">Company</label>
            </div>

            {/* Category */}
            <div className="form-floating mb-3">
                <input className="form-control"
                    id="Products__add_Category"
                    type="text" name="Category"
                    placeholder="accessories"
                    defaultValue="accessories"
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
