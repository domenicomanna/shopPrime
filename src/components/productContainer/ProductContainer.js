import React from 'react';
import styles from './ProductContainer.module.css';
import Product from '../product/Product';
import Wrapper from '../wrapper/Wrapper';
const ProductContainer = () => {
    return (
        <Wrapper>
            <div className={styles.grid}>
                <div> <Product /> </div>
                <div> <Product /> </div>
                <div> <Product /> </div>
                <div> <Product /> </div>
                <div> <Product /> </div>
                <div> <Product /> </div>
                <div> <Product /> </div>
                <div> <Product /> </div>
                <div> <Product /> </div>
                <div> <Product /> </div>
                <div> <Product /> </div>
                <div> <Product /> </div>
            </div>
        </Wrapper>
    );
}

export default ProductContainer;