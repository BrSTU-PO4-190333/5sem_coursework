import { useEffect, useState } from "react";

import FetchReadDocuments from "../../../scripts/AbstractFetchRead/FetchReadDocuments";
import DocumentCard from "../../DocumentCard/DocumentCard";
import BreadCrumbs from "../../BreadCrumbs/BreadCrumbs";

function Catalogs() {
    const [documentsArray, setDocumentsArray] = useState([]);

    useEffect(() => {
        documents_read();
    }, []);

    async function documents_read() {
        const class_instance = new FetchReadDocuments();
        const repsonse = await class_instance.read({
            category: 'catalogs',
        });

        setDocumentsArray(repsonse);
    }

    return (
        <>
            <BreadCrumbs />
            <div className="container">
                <h1>Каталоги</h1>
                <div className="depaby_documents">
                    {
                        documentsArray.map(function (value, index) {
                            return (
                                <DocumentCard
                                    key={index}
                                    data={value}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Catalogs;
