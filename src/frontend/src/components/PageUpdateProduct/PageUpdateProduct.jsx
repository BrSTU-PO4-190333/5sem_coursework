import { useLocation, Redirect } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function PageUpdateProduct() {
    const [ID, SetID] = useState(0);
    const [Model, SetModel] = useState("");
    const [Name, SetName] = useState("");
    const [NameRU, SetNameRU] = useState("");
    const [OnBox, SetOnBox] = useState(0);
    const [KG, SetKG] = useState(0.00);
    const [M3, SetM3] = useState(0.0000);
    const location = useLocation();
    const [RedirectHTML, SetRedirectHTML] = useState((<div></div>));
    const [constructorHasRun, setConstructorHasRun] = useState(false);

    // = = = = = constructor
    const constructor = () => {
        if (constructorHasRun) return;
        setConstructorHasRun(true);

        let URL = location.pathname;
        let arr = URL.split("/");
        let id = arr[arr.length - 1];
        SetID(id);

        let url = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}`;
        url += `/get-product`;
        url += `/`;
        url += `id=${id}`;
        url += `&`;
        url += `login=${localStorage.getItem("login")}`;
        url += `&`;
        url += `password=${localStorage.getItem("password")}`;

        axios.get(url)
            .then(data => {
                let arr = data["data"] ? data["data"] : 0;
                let object = arr[0] ? arr[0] : 0;
                if (object) {
                    SetModel(object["ID"]);
                    SetModel(object["Model"]);
                    SetName(object["Name"]);
                    SetNameRU(object["NameRU"]);
                    SetOnBox(object["OnBox"]);
                    SetKG(object["KG"]);
                    SetM3(object["M3"]);
                }
                else {
                    alert(`There are not element with ID = ${id}.`);
                }
            });
    };
    constructor();
    // = = = = = end constructor

    function UpdateProduct() {
        axios.post(
            `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/update-product/`,
            {
                login: localStorage.getItem("login"),
                password: localStorage.getItem("password"),
                ID: ID,
                Model: Model,
                Name: Name,
                NameRU: NameRU,
                OnBox: OnBox,
                KG: KG,
                M3: M3,
            }
        )
            .then(data => data["data"])
            .then(data => {
                if (data === "errLogin" || data === "errPassword") {
                    SetRedirectHTML((<Redirect to="/logout" />));
                }
                else {
                    SetRedirectHTML((<Redirect to="/view-products" />));
                }
            });
    }

    return (
        <div>
            {RedirectHTML}
            <h2>Update Product page</h2>
            <div className="mb-3">
                <label className="form-label">Model</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder="920100"
                    name="Model"
                    value={Model}
                    onInput={event => SetModel(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder="2 Gang Earthed Socket"
                    name="Name"
                    value={Name}
                    onInput={event => SetName(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">NameRU</label>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Колодка 2 гнезда с заземлением"
                    name="NameRU"
                    value={NameRU}
                    onInput={event => SetNameRU(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">On box</label>
                <input
                    className="form-control"
                    type="number"
                    placeholder="24"
                    name="OnBox"
                    value={OnBox}
                    onInput={event => SetOnBox(event.target.value)}
                    min="0"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">KG</label>
                <input
                    className="form-control"
                    type="number"
                    placeholder="2.09"
                    name="KG"
                    value={KG}
                    onInput={event => SetKG(event.target.value)}
                    step="0.01"
                    min="0"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">M3</label>
                <input
                    className="form-control"
                    type="number"
                    placeholder="0.0087"
                    name="M3"
                    value={M3}
                    onInput={event => SetM3(event.target.value)}
                    step="0.0001"
                    min="0"
                />
            </div>
            <button
                className="btn btn-success"
                onClick={event => UpdateProduct()}
            >
                Update Product
            </button>
        </div>
    );
}

export default PageUpdateProduct;
