import React from 'react';
import Wrapper from '../../wrapper/Wrapper';
import NavigationItems from '../navigationItems/NavigationItems';
import styles from './Toolbar.module.css';

const Toolbar = (props) => {
    return (
        <Wrapper>
            <nav className={styles.navigation}>
                <h1 className={styles.brand}> <span className={styles.hilight}>Shop</span>Prime </h1>
                <i onClick={props.toggleMobileNavItems}
                    className={['fas fa-bars', styles.hamburger].join(' ')}>
                </i>
                <NavigationItems mobileNavItemsShouldShow={props.mobileNavItemsShouldShow} />
            </nav>
        </Wrapper>
    );
}

export default Toolbar;