import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = (props) => {
    let visibilityStyle = props.shouldBeVisible ? { visibility: 'visible' } : { visibility: 'hidden' };

    return (
        <div
            style={visibilityStyle}
            className={styles.backdrop}
            onClick={props.clicked} >
        </div>
    );
}

export default Backdrop;