import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPen} from '@fortawesome/free-solid-svg-icons';
import gpi_class_FetchProducts from "../../scripts/gpi_class_FetchProducts";
import styles from "./gpi_get_products.module.css";

function GpiGetProducts() {
  const [gpiArrayProducts, setGpiArrayProducts] = useState([]);

  useEffect(() => {
    gpi_get_products();
  }, []);

  // Функция, которая получает массив продуктов
  async function gpi_get_products() {
    const gpi_obj = new gpi_class_FetchProducts();
    const gpi_res = await gpi_obj.gpi_get_products(true);
    setGpiArrayProducts(gpi_res);
  }

  // Функция, которая удаляет продукт
  async function gpi_delete_product(gpi_id) {
    const gpi_obj = new gpi_class_FetchProducts();
    const gpi_status = await gpi_obj.gpi_delete_product(gpi_id);

    if (gpi_status === false) {
      return;
    }
    await gpi_get_products();

    setTimeout(async function() {
      await gpi_get_products();
    }, 3000);

    alert("Element deleted with success");
  }

  // Функция, которая удаляет таблицу продуктов
  async function gpi_delete_table_product() {
    const gpi_obj = new gpi_class_FetchProducts();
    const gpi_status = await gpi_obj.gpi_delete_table_product();

    if (gpi_status === false) {
      return;
    }

    setTimeout(async function() {
      await gpi_get_products();
    }, 3000);
    
    alert("Table products cleared with success");
  }

  return (
    <div className={`${styles.Products__get} container`}> 
      <div className="mb-3 mt-3">
        <button
          className="btn btn-outline-danger"
          onClick={event => gpi_delete_table_product()}
        >
          Delete table
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Img</th>
            <th>Img src</th>
            <th>Model</th>
            <th>Name</th>
            <th>OnBox</th>
            <th>KG</th>
            <th>M3</th>
            <th>CostBYN</th>
            <th>Company</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {gpiArrayProducts.map((gpi_value, gpi_index) => (
            <tr key={gpi_index}>
              <th>{gpi_value.gpi_id}</th>
              <td>
                <img
                  src={gpi_value.gpi_img_path}
                  alt=""
                  width="64"
                />
              </td>
              <td>{gpi_value.gpi_img_path}</td>
              <td>{gpi_value.gpi_model}</td>
              <td>{gpi_value.gpi_name}</td>
              <td>{gpi_value.gpi_on_box}</td>
              <td>{gpi_value.gpi_kg}</td>
              <td>{gpi_value.gpi_m3}</td>
              <td>{gpi_value.gpi_cost_byn}</td>
              <td>{gpi_value.gpi_company}</td>
              <td>{gpi_value.gpi_category}</td>
              <td>
                <Link
                  to={`/products/edit/${gpi_value.gpi_id}`}
                  className="btn btn-outline-success"
                >
                  <FontAwesomeIcon icon={faPen} />
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-outline-danger form-control"
                  onClick={event => gpi_delete_product(gpi_value.gpi_id)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GpiGetProducts;
