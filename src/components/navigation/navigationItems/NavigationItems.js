import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

const NavigationItems = (props) => {
    let listClasses = [styles.navigationList];
    if (!props.mobileNavItemsShouldShow) listClasses.push(styles.displayNone);
    
    return (  
        <ul className = {listClasses.join(' ')}>
            <NavigationItem> Random Link 1 </NavigationItem>
            <NavigationItem> Random Link 2 </NavigationItem>
            <NavigationItem> Random Link 3 </NavigationItem>
        </ul>
    );
}
 
export default NavigationItems;