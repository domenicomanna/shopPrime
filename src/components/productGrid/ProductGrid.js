import React from 'react';
import styles from './ProductGrid.module.css';
import Product from '../product/Product';
import Wrapper from '../wrapper/Wrapper';

const ProductGrid = (props) => {
    let transformedProducts = transformAllProducts(props.products);
    return (
        <Wrapper>
            <div className={styles.grid}>
                {transformedProducts}
            </div>
        </Wrapper>
    );
}

export default ProductGrid;

function transformAllProducts(products) {
    return products.map((product, index) => {
        
        return (
            <div key={product.id}>
                <Product
                    imageName={product.imageName}
                    description={product.description}
                    price={product.price} />
            </div>
        )
    })
}