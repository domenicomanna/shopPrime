import React from 'react';
import styles from './Modal.module.css';
const Modal = (props) => {
    return ( 
        <div className = {[styles.modal, styles.modalActive].join(' ')}>
            <h1>hi</h1>
            {props.children}
        </div>
     );
}
 
export default Modal;