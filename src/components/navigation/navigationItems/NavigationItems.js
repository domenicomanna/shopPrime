import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import styles from './NavigationItems.module.css';

const NavigationItems = () => {
    return (  
        <ul className = {styles.navigationList}>
            <NavigationItem> Random Link 1 </NavigationItem>
            <NavigationItem> Random Link 2 </NavigationItem>
            <NavigationItem> Random Link 3 </NavigationItem>
        </ul>
    );
}
 
export default NavigationItems;