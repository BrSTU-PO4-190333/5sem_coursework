import { useParams } from 'react-router-dom';
import Product from './../products/products';

function ProductsCategory() {
    const { category } = useParams();

    return (
        <Product params={{
            category: category,
        }} />
    )
}

export default ProductsCategory;
