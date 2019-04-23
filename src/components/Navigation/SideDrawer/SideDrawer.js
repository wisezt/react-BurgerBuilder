import React from 'react';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import classes from './SideDrawer.css';

const sideDrawer =(props) => {
    // ...
    return (
        <div className={classes.SideDrawer}>
            <Logo/>
            <nav>
                    <NavigationItems/>

            </nav>

        </div>


    );
};

export default sideDrawer;