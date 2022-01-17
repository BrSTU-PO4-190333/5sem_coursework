import AbstractFetchCrud from "./AbstractFetchCrud";

class FetchCrudContacts extends AbstractFetchCrud
{
    constructor() {
        super();
        this.api += '/api/contacts';
    }
}

export default FetchCrudContacts;
