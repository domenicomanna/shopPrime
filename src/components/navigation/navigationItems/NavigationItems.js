import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

const NavigationItems = (props) => {
    let listClasses = [styles.navigationList];
    if (!props.mobileNavItemsShouldShow) listClasses.push(styles.displayNone);
    
    return (  
        <ul className = {listClasses.join(' ')}>
            <NavigationItem> Home </NavigationItem>
            <NavigationItem> Order History </NavigationItem>
        </ul>
    );
}
 
export default NavigationItems;