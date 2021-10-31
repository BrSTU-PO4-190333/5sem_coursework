import axios from "axios";

export default function AddProduct() {
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

        return gpi_product_data;
    }

    return (
        <form onSubmit={gpi_add}>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Img</th>
                        <th>Model</th>
                        <th>Name</th>
                        <th>OnBox</th>
                        <th>KG</th>
                        <th>M3</th>
                        <th>CostBYN</th>
                        <th>Company</th>
                        <th>Category</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    <tr onSubmit={gpi_add}>
                        <th>New</th>
                        <th>
                            <input
                                className="form-control"
                                type="text"
                                name="Img"
                                defaultValue="https://ooodepa.github.io/ooodepa-products/de-pa-electric/accessories/11101.png"
                                placeholder="https://ooodepa.github.io/ooodepa-products/de-pa-electric/accessories/11101.png"
                            />
                        </th>
                        <th>
                            <input
                                className="form-control"
                                type="text"
                                name="Model"
                                defaultValue="11101"
                                placeholder="11101"
                            />
                        </th>
                        <th>
                            <input
                                className="form-control"
                                type="text"
                                name="Name"
                                defaultValue="Вилка прямая с заземлением"
                                placeholder="Вилка прямая с заземлением"
                            />
                        </th>
                        <th>
                            <input
                                className="form-control"
                                type="number" min="0"
                                name="OnBox"
                                defaultValue="500"
                                placeholder="500"
                            />
                        </th>
                        <th>
                            <input
                                className="form-control"
                                type="number" min="0" step="0.001"
                                name="KG"
                                defaultValue="16.45"
                                placeholder="16.45"
                            />
                        </th>
                        <th>
                            <input
                                className="form-control"
                                type="number" min="0" step="0.0001"
                                name="M3"
                                defaultValue="0.0706"
                                placeholder="0.0706"
                            />
                        </th>
                        <th>
                            <input
                                className="form-control"
                                type="number" min="0" step="0.01"
                                name="CostBYN"
                                defaultValue="0.00"
                                placeholder="0.00"
                            />
                        </th>
                        <th>
                            <input
                                className="form-control"
                                type="text"
                                name="Company"
                                defaultValue="de-pa"
                                placeholder="de-pa"
                            />
                        </th>
                        <th>
                            <input
                                className="form-control"
                                type="text"
                                name="Category"
                                defaultValue="accessories"
                                placeholder="accessories"
                            />
                        </th>
                        <th>
                            <button
                                className="btn btn-success form-control"
                                type="submit"
                            >Add</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}
