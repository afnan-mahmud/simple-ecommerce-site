import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../fakeData/products.json';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productkey} = useParams();
    const product = Data.find(pd => pd.key === productkey)
    return (
        <div>
            <Product pdaddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;