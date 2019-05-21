import React, { Component, Fragment } from 'react';
import Toolbar from '../navigation/toolbar/Toolbar';
import Backdrop from '../backdrop/Backdrop';
import styles from './Layout.module.css';

class Layout extends Component {
    state = {
        mobileNavItemsShouldShow: false
    }

    toggleMobileNavItems = () => {
        let previousToggleState = this.state.mobileNavItemsShouldShow;
        this.setState({mobileNavItemsShouldShow: !previousToggleState});
    }

    render() {
        return (
            <Fragment>
                <header className={styles.header}>
                    <Toolbar mobileNavItemsShouldShow={this.state.mobileNavItemsShouldShow}
                        toggleMobileNavItems={this.toggleMobileNavItems} />
                </header>

                <Backdrop shouldBeVisible={this.state.mobileNavItemsShouldShow}
                clicked = {this.toggleMobileNavItems} 
                opacity = {'highOpacity'}/>

                {this.props.children}
            </Fragment>
        );
    }
}

export default Layout;