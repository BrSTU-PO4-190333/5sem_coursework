import { useState } from "react";

import FetchCrudProductCategories from "./../../scripts/AbstractFetchCrud/FetchCrudProductCategories";
import HomeButton from "../../components/HomeButton/HomeButton";
import styles from "./productCategories.module.css";
import DeleteButton from "../../components/DeleteButton/DeleteButton";
import DeleteTableButton from "../../components/DeleteTableButton/DeleteTableButton";
import LoadTableButton from "../../components/LoadTableButton/LoadTableButton";
import SaveAsJsonButton from "../../components/SaveAsJsonButton/SaveAsJsonButton";
import SaveAsCsvButton from "../../components/SaveAsCsvButton/SaveAsCsvButton";
import UploadJsonButton from "../../components/UploadJsonButton/UploadJsonButton";
import FormButton from "../../components/FormButton/FormButton";
import ProductCategoriesForm from "../../components/ProductCategoriesForm/ProductCategoriesForm";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

function ProductCategories() {
    const [array, setArray] = useState([]);
    const [indexEdit, setIndexEdit] = useState('new');
    const [formSignal, setFormSignal] = useState(0);

    async function read() {
        const class_instance = new FetchCrudProductCategories();
        const response = await class_instance.read();

        if (response.length === 0) {
            alert("В таблице нет записей");
        }

        setArray(response);
    }

    return (
        <div className={styles.window}>
            <BreadCrumbs />
            <div className='depaby_toolbar'>
                <HomeButton />
                <UploadJsonButton FetchClass={FetchCrudProductCategories} />
                <FormButton
                    id_html_table={indexEdit === 'new' ? 'new' : array[indexEdit].depaby_id}
                    data={array[indexEdit] ? array[indexEdit] : {}}
                    signal={formSignal}
                    destructor={() => { setIndexEdit('new') }}
                    FormTable={ProductCategoriesForm}
                    FetchClass={FetchCrudProductCategories}
                />
                <LoadTableButton read={read} />
                <SaveAsJsonButton array={array} table_name="depaby_productCategories" />
                <SaveAsCsvButton array={array} table_name="depaby_productCategories" />
                <DeleteTableButton read={read} FetchClass={FetchCrudProductCategories} />
            </div>
            <table className='depaby_table'>
                <thead>
                    <tr>
                        <th></th>
                        <th>id</th>
                        <th>caption</th>
                        <th>product_category</th>
                        <th colSpan={2}>img_href</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((value, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{value.depaby_id}</td>
                            <td>{value.depaby_caption}</td>
                            <td>{value.depaby_product_category}</td>
                            <td><img src={value.depaby_img_href} alt="" width={64} /></td>
                            <td>{value.depaby_img_href}</td>
                            <td className='depaby_editButton'>
                                <button onClick={event => {
                                    setIndexEdit(index);
                                    setFormSignal(formSignal + 1);
                                }}>edit</button>
                            </td>
                            <td className='depaby_deleteButton'>
                                <DeleteButton
                                    id={value.depaby_id}
                                    read={read}
                                    FetchClass={FetchCrudProductCategories}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductCategories;
