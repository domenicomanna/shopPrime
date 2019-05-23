import React from 'react';
import styles from './SummaryTable.module.css';

const SummaryTable = (props) => {
    return (  
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
    );
}
 
export default SummaryTable;

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