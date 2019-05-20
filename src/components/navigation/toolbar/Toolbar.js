import React from 'react';
import Wrapper from '../../wrapper/Wrapper';
import NavigationItems from '../navigationItems/NavigationItems';
import styles from './Toolbar.module.css';

const Toolbar = () => {
    return (
            <Wrapper>
                <nav className={styles.navigation}>
                    <h1 className={styles.brand}> ShopPrime </h1>
                    <i className={['fas fa-bars', styles.hamburger].join(' ')}></i>
                    <NavigationItems />
                </nav>
            </Wrapper>
    );
}

export default Toolbar;