import React, { Fragment } from 'react';
import styles from './OrderSummary.module.css';
import SummaryTable from './SummaryTable/SummaryTable';
import Button from '../Button/Button';


const OrderSummary = (props) => {
    return (
        <Fragment>
            <SummaryTable itemsToPurchase = {props.itemsToPurchase}/>
            <p className = {styles.totalPrice}>Total: ${props.totalPrice}</p>
            <div className = {styles.buttonWrapper}>
                <Button buttonType = 'button--primary'> Pay Now</Button>
                <Button clicked = {props.continueShopping} buttonType = 'button--primary'> Continue Shopping</Button>
            </div>
        </Fragment>
    );
}

export default OrderSummary;
