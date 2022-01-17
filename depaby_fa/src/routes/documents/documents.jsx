import { useState } from "react";

import FetchDocuments from "./../../scripts/FetchDocuments";
import DocumentsDeleteButton from "../../components/documents/DocumentsDeleteButton/DocumentsDeleteButton";
import DocumentsDownloadCsvButton from "../../components/documents/DocumentsDownloadCsvButton/DocumentsDownloadCsvButton";
import DocumentsDownloadJsonButton from "../../components/documents/DocumentsDownloadJsonButton/DocumentsDownloadJsonButton";
import DocumentsUpdateTableButton from "../../components/documents/DocumentsUpdateTableButton/DocumentsUpdateTableButton";
import DocumentFormButton from "../../components/documents/DocumentFormButton/DocumentFormButton";
import DocumentsLoadButton from "../../components/documents/DocumentsLoadButton/DocumentsLoadButton";
import ToolbarHomeButton from "../../components/Toolbar/ToolbarHomeButton/ToolbarHomeButton";
import styles from "./documents.module.css";
import DeleteButton from "../../components/DeleteButton/DeleteButton";

function Documents() {
  const [documentsArray, setDocumentsArray] = useState([]);
  const [indexEditDocument, setIndexEditDocument] = useState('new');
  const [documentFormSignal, setDocumentFormSignal] = useState(0);

  async function documents_read() {
    const documents_object = new FetchDocuments();
    const response = await documents_object.read();

    if (response.length === 0) {
      alert("В таблице продуктов нет записей");
    }

    setDocumentsArray(response);
  }

  return (
    <div className={styles.window}>
      <div className='depaby_toolbar'>
        <ToolbarHomeButton />
        <DocumentsLoadButton />
        <DocumentFormButton
          table_id={indexEditDocument === 'new' ? 'new' : documentsArray[indexEditDocument].depaby_id}
          document_data={documentsArray[indexEditDocument] ? documentsArray[indexEditDocument] : {}}
          signal={documentFormSignal}
          destructor={() => {setIndexEditDocument('new')}}
        />
        <DocumentsUpdateTableButton documents_read={documents_read} />
        <DocumentsDownloadJsonButton documents_array={documentsArray} />
        <DocumentsDownloadCsvButton documents_array={documentsArray} />
        <DocumentsDeleteButton documents_read={documents_read} />
      </div>
      <table className='depaby_table'>
        <thead>
          <tr>
            <th></th>
            <th>id</th>
            <th>caption</th>
            <th>href</th>
            <th>page_category</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {documentsArray.map((value, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{value.depaby_id}</td>
              <td>{value.depaby_caption}</td>
              <td>{value.depaby_href}</td>
              <td>{value.depaby_page_category}</td>
              <td className='depaby_editButton'>
                <button onClick={event => {
                  setIndexEditDocument(index);
                  setDocumentFormSignal(documentFormSignal + 1);
                }}>edit</button>
              </td>
              <td className='depaby_deleteButton'>
                <DeleteButton
                  id={value.depaby_id}
                  read={documents_read}
                  FetchClass={FetchDocuments}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Documents;
