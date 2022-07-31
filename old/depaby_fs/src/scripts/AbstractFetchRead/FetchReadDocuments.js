import AbstractFetchRead from "./AbstractFetchRead";

class FetchReadDocuments extends AbstractFetchRead
{
    constructor() {
        super();
        this.api += '/api/documents';
    }
}

export default FetchReadDocuments;
