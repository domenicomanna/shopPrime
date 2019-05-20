import React from 'react';
import styles from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <li className = {styles.listItem}> <a className={styles.link} href="#"> {props.children} </a> </li>
    )
}

export default NavigationItem;