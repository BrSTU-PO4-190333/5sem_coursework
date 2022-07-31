import AbstractFetchCrud from "./AbstractFetchCrud";

class FetchCrudProducts extends AbstractFetchCrud
{
    constructor() {
        super();
        this.api += '/api/products';
    }
}

export default FetchCrudProducts;
