import AbstractFetchCrud from "./AbstractFetchCrud";

class FetchCrudDocuments extends AbstractFetchCrud
{
    constructor() {
        super();
        this.api += '/api/documents';
    }
}

export default FetchCrudDocuments;
