import { Redirect } from 'react-router-dom';
import { useState } from 'react';

function PageLogout() {
    const [constructorHasRun, setConstructorHasRun] = useState(false);
    const [HTMLredirect, SetHTMLredirect] = useState(<div></div>);

    // = = = = = constructor
    const constructor = () => {
        if (constructorHasRun) return;
        setConstructorHasRun(true);

        localStorage.removeItem("login");
        localStorage.removeItem("password");
        SetHTMLredirect(<Redirect to="/" />);
    };
    constructor();
    // = = = = = end constructor

    return (
        <div>
            {HTMLredirect}
        </div>
    );
}

export default PageLogout;
