import { Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';

function GpiLogout() {
    const [gpi_html_redirect, gpi_set_html_redirect] = useState(<div></div>);

    useEffect(function() { // Constructor
        gpi_logout();
    }, []);

    function gpi_logout() {
        localStorage.removeItem("login");
        localStorage.removeItem("password");
        gpi_set_html_redirect(<Redirect to="/" />);
    }

    return (
        <div>
            {gpi_html_redirect}
        </div>
    );
}

export default GpiLogout;
