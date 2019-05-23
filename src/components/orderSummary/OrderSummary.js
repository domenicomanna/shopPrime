import React, { Fragment } from 'react';
import styles from './OrderSummary.module.css';
import SummaryTable from './SummaryTable/SummaryTable';


const OrderSummary = (props) => {
    return (
        <Fragment>
            <SummaryTable itemsToPurchase = {props.itemsToPurchase}/>
            <p className = {styles.totalPrice}>Total: ${props.totalPrice}</p>
        </Fragment>
    );
}

export default OrderSummary;
