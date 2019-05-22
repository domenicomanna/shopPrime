import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    let buttonClasses = `${styles.button} ${styles[props.buttonType]}`;

    return ( 
        <button className = {buttonClasses}> {props.children} </button>
     );
}
 
export default Button;