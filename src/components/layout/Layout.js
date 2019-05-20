import React, { Component, Fragment } from 'react';
import Toolbar from '../navigation/toolbar/Toolbar';
import Backdrop from '../backdrop/Backdrop';
import styles from './Layout.module.css';

class Layout extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <header className = {styles.header}>
                    <Toolbar />
                </header>
                
                <Backdrop/>
                {this.props.children}
            </Fragment>
        );
    }
}

export default Layout;