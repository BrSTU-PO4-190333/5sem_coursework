import AbstractFetchCrud from "./AbstractFetchCrud";

class FetchCrudProductCategories extends AbstractFetchCrud
{
    constructor() {
        super();
        this.api += '/api/productCategories';
    }
}

export default FetchCrudProductCategories;
