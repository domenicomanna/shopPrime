import React, { Fragment } from 'react';
import styles from './Modal.module.css';
import Backdrop from '../backdrop/Backdrop';

const Modal = (props) => {
    let modalClasses = [styles.modal];
    if (props.shouldBeVisible) modalClasses.push(styles.modalActive);

    return (

        <Fragment>
            <div className={modalClasses.join(' ')}>
                <div className={styles.exitIconWrapper}>
                    <i onClick = {props.toggleModal} className={`fas fa-times ${styles.exitIcon}`}></i>
                </div>
                {props.children}
            </div>
            <Backdrop shouldBeVisible={props.shouldBeVisible} opacity={'lowOpacity'} />
        </Fragment>
    );
}

export default Modal;