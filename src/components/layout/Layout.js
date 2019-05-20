import React, { Component, Fragment } from 'react';
import Toolbar from '../navigation/toolbar/Toolbar';
import styles from './Layout.module.css';

class Layout extends Component {
    state = {}

    render() {
        return (
            <Fragment>
                <header>
                    <Toolbar />
                </header>

                {this.props.children}
            </Fragment>
        );
    }
}

export default Layout;