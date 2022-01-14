import { useEffect, useState } from "react";
import FetchDocuments from "../../../scripts/FetchDocuments";
import DocumentCard from "../../DocumentCard/DocumentCard";

function Prices() {
    const [documentsArray, setDocumentsArray] = useState([{}]);

    useEffect(() => {
        documents_read();
    }, []);

    async function documents_read() {
        const documents_object = new FetchDocuments();
        const repsonse = await documents_object.read({
            category: 'prices',
        });

        setDocumentsArray(repsonse);
    }

    return (
        <div className="container">
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
    );
}

export default Prices;
