import React, { Fragment } from "react";

import logo from '../assets/pokedex-logo.png'
import Search from './Search'

const Home = () => {
    return (
        <Fragment>
            <div className="main-logo">
                <img src={logo} alt="Pokedex"/>
            </div>
           <Search/>
        </Fragment>
    );
};

export default Home;