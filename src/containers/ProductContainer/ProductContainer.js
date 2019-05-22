import React, { Component } from 'react';
import ProductGrid from '../../components/productGrid/ProductGrid';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import Wrapper from '../../components/wrapper/Wrapper';
import ProductData from '../../data/products/productData';
import CartItems from '../../util/CartItems';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor'
import styles from './ProductContainer.module.css';

class ProductContainer extends Component {
    productData = new ProductData();
    cartItems = new CartItems();

    state = {
        itemsToPurchase: this.cartItems.getCartItems(),
        itemAddedToCart: false
    }

    addItemToCartHandler = itemIndex => {
        let itemToAdd = this.productData.getProduct(itemIndex);
        this.cartItems.add(itemToAdd);
        this.displayToast();

        this.setState({
            itemsToPurchase: this.cartItems.getCartItems(),
            itemAddedToCart: true
        })
    }

    displayToast(){
        toast('Item added',{
            position: "top-center",
            autoClose: 3000,
            className: css({
                color: '#000',
                borderRadius: '5px'
            })
        })
    }

    render() {
        let checkoutButtonType = (this.state.itemsToPurchase.length === 0 ?
            'button--disabled' : 'button--checkout');

        return (
            <Wrapper>
                <SectionTitle> Shop the latest trends </SectionTitle>
                <ProductGrid products={this.productData.products}
                    addItemToCart={this.addItemToCartHandler} />
                <div className={styles.checkoutButtonWrapper}>
                    <Button buttonType={checkoutButtonType}>Checkout</Button>
                </div>
            </Wrapper>
        )
    }
}

export default ProductContainer;
