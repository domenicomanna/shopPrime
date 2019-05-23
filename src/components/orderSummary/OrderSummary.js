import React, { Fragment } from 'react';
import styles from './OrderSummary.module.css';


const OrderSummary = (props) => {
    return (
        <Fragment>
            <table className={styles.table}>
                <tbody>
                    <tr>
                        <th className={styles.itemHeader}>Item</th>
                        <th>Quantity</th>
                    </tr>
                </tbody>
                <tbody>
                    {getAllRows(props.itemsToPurchase)}
                </tbody>
            </table>
            <p className = {styles.totalPrice}>Total: ${props.totalPrice}</p>
        </Fragment>
    );
}

export default OrderSummary;

function getAllRows(itemsToPurchase) {
    let rows = itemsToPurchase.map(itemToPurchase => {
        return (
            <tr key={itemToPurchase.item.id}>
                <td>{itemToPurchase.item.description}</td>
                <td>{itemToPurchase.quantity}</td>
            </tr>
        );
    })
    return rows;
}