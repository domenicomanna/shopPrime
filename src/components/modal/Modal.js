import React, { Fragment } from 'react';
import styles from './Modal.module.css';
import Backdrop from '../backdrop/Backdrop';
const Modal = (props) => {
    return (

        <Fragment>
            <div className={[styles.modal, styles.modalActive].join(' ')}>
                <h1>hi</h1>
                {props.children}
            </div>
            <Backdrop shouldBeVisible = {true} opacity = {'lowOpacity'}/>
        </Fragment>
    );
}

export default Modal;