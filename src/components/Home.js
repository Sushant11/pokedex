import React, { Fragment, useEffect } from "react";

import logo from '../assets/pokedex-logo.png'
import Search from './Search'

const Home = props => {
    const { fetchPokedex, pokedex, pokedexErrors, pokedexLoading } = props;

    useEffect(() => {
        fetchPokedex();
    }, [])

    return (
        <Fragment>
            <div className="main-logo">
                <img src={logo} alt="Pokedex" />
            </div>
            <Search />
        </Fragment>
    );
};

export default Home;