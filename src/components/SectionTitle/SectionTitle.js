import React from 'react';
import styles from './SectionTitle.module.css';
import Wrapper from '../wrapper/Wrapper';
const SectionTitle = (props) => {
    return (
        <Wrapper>
            <h1 className={styles.sectionTitle}> {props.children} </h1>
        </Wrapper>
    );
}

export default SectionTitle;