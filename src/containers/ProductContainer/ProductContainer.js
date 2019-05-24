import React, { Component } from 'react';
import ProductGrid from '../../components/productGrid/ProductGrid';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Button/Button';
import Wrapper from '../../components/wrapper/Wrapper';
import ProductData from '../../data/products/productData';
import CartItems from '../../util/CartItems';
import Modal from '../../components/modal/Modal';
import OrderSummary from '../../components/orderSummary/OrderSummary';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { css } from 'glamor'
import styles from './ProductContainer.module.css';

class ProductContainer extends Component {
    productData = new ProductData();
    cartItems = new CartItems();

    state = {
        itemsToPurchase: this.cartItems.getCartItems(),
        checkoutButtonWasClicked: false,
        payNowButtonWasClicked: false
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

    displayToast() {
        toast('Item added to cart. Checkout at the bottom of the page', {
            position: "top-center",
            autoClose: 3000,
            className: css({
                color: '#000',
                borderRadius: '5px',
                lineHeight: 1.6
            })
        })
    }

    toggleOrderSummary = _ => {
        let previousCheckoutButtonState = this.state.checkoutButtonWasClicked;
        this.setState({ checkoutButtonWasClicked: !previousCheckoutButtonState })
    }

    toggleOrderConfirmationHandler = _ => {
        if (this.state.checkoutButtonWasClicked) this.toggleOrderSummary();
        let previousPayNowButtonState = this.state.payNowButtonWasClicked;
        this.setState({ payNowButtonWasClicked: !previousPayNowButtonState })
    }

    render() {

        let totalPrice = this.cartItems.getTotalPrice().toFixed(2);
        
        if (this.state.payNowButtonWasClicked) this.cartItems.clearAll();

        let checkoutButtonType = (this.cartItems.getCartItems().length === 0 ?
            'button--disabled' : 'button--checkout');

        return (
            <Wrapper>
                <Modal toggleModal={this.toggleOrderSummary}
                    shouldBeVisible={this.state.checkoutButtonWasClicked}>
                    <OrderSummary itemsToPurchase={this.state.itemsToPurchase}
                        totalPrice={totalPrice}
                        continueShopping={this.toggleOrderSummary}
                        payNow={this.toggleOrderConfirmationHandler} />
                </Modal>

                <Modal toggleModal={this.toggleOrderConfirmationHandler}
                    shouldBeVisible={this.state.payNowButtonWasClicked}>
                    <p>Thank you for your payment of ${totalPrice} </p>
                </Modal>

                <SectionTitle> Shop the latest trends </SectionTitle>
                <ProductGrid products={this.productData.products}
                    addItemToCart={this.addItemToCartHandler} />
                <div className={styles.checkoutButtonWrapper}>
                    <Button clicked={this.toggleOrderSummary} buttonType={checkoutButtonType}>Checkout</Button>
                </div>

            </Wrapper>
        )
    }
}

export default ProductContainer;
