import React from 'react';
import styles from './ProductGrid.module.css';
import Product from '../product/Product';
import { logicalExpression } from '@babel/types';

const ProductGrid = (props) => {
    let transformedProducts = transformAllProducts(props);
    return (
            <div className={styles.grid}>
                {transformedProducts}
            </div>
    );
}

export default ProductGrid;

function transformAllProducts(props) {
    return props.products.map((product, index) => {
        
        return (
            <div key={product.id}>
                <Product
                    addItemToCart = { _ => props.addItemToCart(index) }
                    imageName={product.imageName}
                    description={product.description}
                    price={product.price} />
            </div>
        )
    })
}