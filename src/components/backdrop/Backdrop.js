import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = (props) => {
    let visibilityStyle = props.shouldBeVisible ? { visibility: 'visible' } : { visibility: 'hidden' };
    let className = [styles.backdrop, styles[props.opacity]];

    return (
        <div
            style={visibilityStyle}
            className={className.join(' ')}
            onClick={props.clicked} >
        </div>
    );
}

export default Backdrop;