import React from 'react';
import styles from './SectionTitle.module.css';
const SectionTitle = (props) => {
    return (
            <h1 className={styles.sectionTitle}> {props.children} </h1>
    );
}

export default SectionTitle;