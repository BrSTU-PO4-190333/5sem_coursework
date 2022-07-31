import AbstractFetchRead from "./AbstractFetchRead";

class FetchReadProductCategories extends AbstractFetchRead
{
    constructor() {
        super();
        this.api += '/api/productCategories';
    }
}

export default FetchReadProductCategories;
