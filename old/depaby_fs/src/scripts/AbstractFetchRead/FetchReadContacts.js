import AbstractFetchRead from "./AbstractFetchRead";

class FetchReadContacts extends AbstractFetchRead
{
    constructor() {
        super();
        this.api += '/api/contacts';
    }
}

export default FetchReadContacts;
