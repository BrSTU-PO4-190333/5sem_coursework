import { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function PageAddProduct() {
    const [Model, SetModel] = useState("920100");
    const [Name, SetName] = useState("2 Gang Earthed Socket");
    const [NameRU, SetNameRU] = useState("Колодка 2 гнезда с заземлением");
    const [OnBox, SetOnBox] = useState(24);
    const [KG, SetKG] = useState(2.09);
    const [M3, SetM3] = useState(0.0087);
    const [RedirectHTML, SetRedirectHTML] = useState((<div></div>));

    function AddElement() {
        axios.post(
            `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/add-product`,
            {
                login: localStorage.getItem("login"),
                password: localStorage.getItem("password"),
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
                onClick={event => AddElement()}
            >
                Add element
            </button>
        </div>
    );
}

export default PageAddProduct;
