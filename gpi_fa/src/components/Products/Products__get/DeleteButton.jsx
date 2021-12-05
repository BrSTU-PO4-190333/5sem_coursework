import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function DeleteButton(props) {

    async function gpi_delete() {
        try {
            const GPI_URL = `${process.env.REACT_APP__API_URL}:${process.env.REACT_APP__API_PORT}/gpi_delete_product_where_id`;
            const GPI_DATA = {
                login: localStorage.getItem("login"),
                password: localStorage.getItem("password"),
                ID: props.id,
            };
            const res = await axios.post(GPI_URL, GPI_DATA);
            if (res.data === 'success') {
                alert(`Deleted element where ID = ${props.id}`);
            }
        }
        catch(err) {
            console.log(err);
            alert("Err");
        }
    }

    return (
        <button
            className="btn btn-outline-danger form-control"
            onClick={event => gpi_delete()}
        >
            <FontAwesomeIcon icon={faTrashAlt} />
        </button>
    );
}
