import React, { Component} from 'react';
import ProductGrid from '../../components/productGrid/ProductGrid';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import Wrapper from '../../components/wrapper/Wrapper';
import ProductData from '../../data/products/productData';
import CartItems from '../../util/CartItems';

import styles from './ProductContainer.module.css';

class ProductContainer extends Component {
    state = {}
    productData = new ProductData();
    cartItems = new CartItems();

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