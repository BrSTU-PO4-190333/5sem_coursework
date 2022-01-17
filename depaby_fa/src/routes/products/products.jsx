import { useState } from "react";

import FetchProducts from "./../../scripts/FetchProducts";
import ProductsDownloadCsvButton from "../../components/products/ProductsDownloadCsvButton/ProductsDownloadCsvButton";
import ProductsDownloadJsonButton from "../../components/products/ProductsDownloadJsonButton/ProductsDownloadJsonButton";
import ProductsUpdateTableButton from "../../components/products/ProductsUpdateTableButton/ProductsUpdateTableButton";
import ProductFormButton from "../../components/products/ProductFormButton/ProductFormButton";
import ProductsLoadButton from "../../components/products/ProductsLoadButton/ProductsLoadButton";
import ToolbarHomeButton from "../../components/Toolbar/ToolbarHomeButton/ToolbarHomeButton";
import styles from "./products.module.css";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import DeleteTableButton from "../../components/DeleteTableButton/DeleteTableButton";

function ProductsRead() {
  const [productsArray, setProductsArray] = useState([]);
  const [indexEditProduct, setIndexEditProduct] = useState('new');
  const [productFormSignal, setProductFormSignal] = useState(0);

  async function products_read() {
    const products_object = new FetchProducts();
    const response = await products_object.read();

    if (response.length === 0) {
      alert("В таблице продуктов нет записей");
    }

    setProductsArray(response);
  }

  return (
    <div className={styles.window}>
      <div className='depaby_toolbar'>
        <ToolbarHomeButton />
        <ProductsLoadButton />
        <ProductFormButton
          table_id={indexEditProduct === 'new' ? 'new' : productsArray[indexEditProduct].depaby_id}
          product_data={productsArray[indexEditProduct] ? productsArray[indexEditProduct] : {}}
          signal={productFormSignal}
          destructor={() => {setIndexEditProduct('new')}}
        />
        <ProductsUpdateTableButton products_read={products_read} />
        <ProductsDownloadJsonButton products_array={productsArray} />
        <ProductsDownloadCsvButton products_array={productsArray} />
        <DeleteTableButton read={products_read} FetchClass={FetchProducts} />
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
                  FetchClass={FetchProducts}
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
