import React, { Fragment, useEffect } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

import logo from '../assets/pokedex-logo.png'
import Search from './Search'
import Main from "./Main";

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#222c81' }} spin />;

const Home = props => {
    const { fetchPokedex, pokedexLoading } = props

    useEffect(() => {
        fetchPokedex();
    }, [])

    return (
        <Fragment>
            <div className="main-logo animate__animated animate__fadeIn">
                <img src={logo} alt="Pokedex" />
            </div>
            <Search />
            {pokedexLoading ? <div className='spin'><Spin indicator={antIcon} /></div> : <Main {...props} />}
            <div className='footer'>
                 <span>POKEDEX 2020 © Sushant Chitrakar</span>
            </div>
        </Fragment>
    );
};

export default Home;