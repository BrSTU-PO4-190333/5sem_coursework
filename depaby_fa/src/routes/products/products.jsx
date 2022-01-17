import { useState } from "react";

import FetchCrudProducts from "./../../scripts/AbstractFetchCrud/FetchCrudProducts";
import HomeButton from "../../components/HomeButton/HomeButton";
import styles from "./products.module.css";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import DeleteTableButton from "../../components/DeleteTableButton/DeleteTableButton";
import LoadTableButton from "../../components/LoadTableButton/LoadTableButton";
import SaveAsJsonButton from "../../components/SaveAsJsonButton/SaveAsJsonButton";
import SaveAsCsvButton from "../../components/SaveAsCsvButton/SaveAsCsvButton";
import UploadJsonButton from "../../components/UploadJsonButton/UploadJsonButton";
import FormButton from "../../components/FormButton/FormButton";
import ProductForm from "../../components/ProductForm/ProductForm";

function ProductsRead() {
  const [productsArray, setProductsArray] = useState([]);
  const [indexEditProduct, setIndexEditProduct] = useState('new');
  const [productFormSignal, setProductFormSignal] = useState(0);

  async function products_read() {
    const products_object = new FetchCrudProducts();
    const response = await products_object.read();

    if (response.length === 0) {
      alert("В таблице продуктов нет записей");
    }

    setProductsArray(response);
  }

  return (
    <div className={styles.window}>
      <div className='depaby_toolbar'>
        <HomeButton />
        <UploadJsonButton FetchClass={FetchCrudProducts} />
        <FormButton
          id_html_table={indexEditProduct === 'new' ? 'new' : productsArray[indexEditProduct].depaby_id}
          data={productsArray[indexEditProduct] ? productsArray[indexEditProduct] : {}}
          signal={productFormSignal}
          destructor={() => {setIndexEditProduct('new')}}
          FormTable={ProductForm}
          FetchClass={FetchCrudProducts}
        />
        <LoadTableButton read={products_read} />
        <SaveAsJsonButton array={productsArray} table_name="depaby_products" />
        <SaveAsCsvButton array={productsArray} table_name="depaby_products" />
        <DeleteTableButton read={products_read} FetchClass={FetchCrudProducts} />
      </div>
      <table className='depaby_table'>
        <thead>
          <tr>
            <th></th>
            <th>id</th>
            <th>img</th>
            <th>img_href</th>
            <th>model</th>
            <th>name</th>
            <th>on_box</th>
            <th>kg</th>
            <th>m3</th>
            <th>cost_byn</th>
            <th>company</th>
            <th>category</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {productsArray.map((value, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{value.depaby_id}</td>
              <td>
                <img src={value.depaby_img_href} alt="" width="64" />
              </td>
              <td>{value.depaby_img_href}</td>
              <td>{value.depaby_model}</td>
              <td>{value.depaby_name}</td>
              <td>{value.depaby_on_box}</td>
              <td>{value.depaby_kg}</td>
              <td>{value.depaby_m3}</td>
              <td>{value.depaby_cost_byn}</td>
              <td>{value.depaby_company}</td>
              <td>{value.depaby_category}</td>
              <td className='depaby_editButton'>
                <button onClick={event => {
                  setIndexEditProduct(index);
                  setProductFormSignal(productFormSignal + 1);
                }}>edit</button>
              </td>
              <td className='depaby_deleteButton'>
                <DeleteButton
                  id={value.depaby_id}
                  read={products_read}
                  FetchClass={FetchCrudProducts}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsRead;
