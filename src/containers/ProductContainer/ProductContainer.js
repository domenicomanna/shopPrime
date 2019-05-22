import React, { Component, Fragment } from 'react';
import ProductGrid from '../../components/productGrid/ProductGrid';
import ProductData from '../../data/products/productData';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import Wrapper from '../../components/wrapper/Wrapper';
import styles from './ProductContainer.module.css';

class ProductContainer extends Component {
    state = {}
    productData = new ProductData();

    render() {
        return (
            <Wrapper>
                <SectionTitle> Shop the latest trends </SectionTitle>
                <ProductGrid products={this.productData.products} />
                <div className={styles.checkoutButtonWrapper}>
                    <Button buttonType = "button--checkout">Checkout</Button>
                </div>
            </Wrapper>
        )
    }
}

export default ProductContainer;