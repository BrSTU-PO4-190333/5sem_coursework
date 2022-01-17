import AbstractFetchRead from "./AbstractFetchRead";

class FetchReadProducts extends AbstractFetchRead
{
    constructor() {
        super();
        this.api += '/api/products';
    }
}

export default FetchReadProducts;
