import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

function LogOut() {
    const [HtmlRedirect, setHtmlRedirect] = useState(<></>);

    useEffect(function() {
        localStorage.removeItem("login");
        localStorage.removeItem("password");
        setHtmlRedirect(<Redirect to="/" />);
    }, []);

    return (
        <div>
            {
                HtmlRedirect
            }
        </div>
    );
}

export default LogOut;
