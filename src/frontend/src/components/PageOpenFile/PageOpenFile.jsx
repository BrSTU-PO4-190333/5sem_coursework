import { useState } from 'react';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';

class Product {
    constructor(
        Model = "",
        Name = "",
        NameRU = "",
        OnBox = 0,
        KG = 0.00,
        M3 = 0.000
    ) {
        this.login = localStorage.getItem("login");
        this.password = localStorage.getItem("password");
        this.Model = Model;
        this.Name = Name;
        this.NameRU = NameRU;
        this.OnBox = OnBox;
        this.KG = KG;
        this.M3 = M3;
    }

    set(object) {
        this.setModel(object["Model"]);
        this.setName(object["Name"]);
        this.setNameRU(object["NameRU"]);
        this.setOnBox(object["OnBox"]);
        this.setKG(object["KG"]);
        this.setM3(object["M3"]);
    }

    get() {
        return {
            login: this.login,
            password: this.password,
            Model: this.Model,
            Name: this.Name,
            NameRU: this.NameRU,
            OnBox: this.OnBox,
            KG: this.KG,
            M3: this.M3,
        };
    }

    setModel(Model) {
        this.Model = (Model !== null && Model !== undefined && typeof (Model) == typeof ("")) ? Model : "";
    }

    setName(Name) {
        this.Name = (Name !== null && Name !== undefined && typeof (Name) == typeof ("")) ? Name : "";
    }

    setNameRU(NameRU) {
        this.NameRU = (NameRU !== null && NameRU !== undefined && typeof (NameRU) == typeof ("")) ? NameRU : "";
    }

    setOnBox(OnBox) {
        this.OnBox = (OnBox !== null && OnBox !== undefined && typeof (OnBox) == typeof (0)) ? OnBox : 0;
    }

    setKG(KG) {
        this.KG = (KG !== null && KG !== undefined && typeof (KG) == typeof (0.00)) ? KG : 0.00;
    }

    setM3(M3) {
        this.M3 = (M3 !== null && M3 !== undefined && typeof (M3) == typeof (0.000)) ? M3 : 0.000;
    }
}

function PageOpenFile() {
    // const [RedirectHTML, SetRedirectHTML] = useState((<div></div>));
    const [ProgressShow, SetProgressShow] = useState('none');
    const [ProgressNumber, SetProgressNumber] = useState(0);
    const [ProgressElementID, SetProgressElementID] = useState(0);

    function get_text(event) {
        SetProgressShow("none");
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            let str = event.target.result;
            let obj = JSON.parse(str);

            if (obj.length == null) {
                localStorage.setItem("arr", "[{}]");
                alert("File not have JSON array!");
                return;
            }

            SetProgressShow("block");
            for (let i = 0; i < obj.length; i += 1) {
                setTimeout(
                    () => {
                        console.log(obj[i]);
                        SetProgressNumber((i * 100 / (obj.length - 1)).toFixed(2));
                        SetProgressElementID(i + 1);

                        let prd = new Product();
                        prd.set(obj[i]);
                        console.log(prd.get());

                        axios.post(
                            `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/add-product`,
                            prd.get()
                        );
                    },
                    500 * i
                );
            }
        };
        reader.readAsText(file);
    }

    return (
        <div>
            {/* {RedirectHTML} */}
            <h2>Open file page</h2>
            <div className="mb-3">
                <input
                    className="form-control"
                    type="file"
                    onChange={event => get_text(event)}
                />
            </div>
            <div style={{
                    display: ProgressShow,
                }}
            >
                <h2>Added element number {ProgressElementID} ({ProgressNumber}%)</h2>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped" style={{ width: `${ProgressNumber}%` }} role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">{ProgressNumber}%</div>
                </div>
            </div>
        </div>
    );
}

export default PageOpenFile;
