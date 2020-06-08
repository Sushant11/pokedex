import React, { useEffect, useState } from 'react';
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

import { isEmpty } from '../utils/commonUtils';
import CardItem from './blocks/CardItem';

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#222c81' }} spin />;


const Main = props => {
    const { pokedexes, pokedexDetails, pokedexDetailLoading, fetchPokedexDetail } = props
    const [detailsArray, setDetailsArray] = useState([])

    useEffect(() => {
        if (pokedexes && pokedexes.length !== 0) {
            pokedexes.forEach(element => {
                fetchPokedexDetail(element.url)
            });
        }
    }, [])

    detailsArray.push(pokedexDetails)

    const finalPokedexes = detailsArray.filter(element => !isEmpty(element))

    return (
        <div className='main'>
            {pokedexDetailLoading ? <div className='spin'><Spin indicator={antIcon} /></div> : finalPokedexes && finalPokedexes.map((i, index) =>
                <CardItem i={i} index={index} key={index} {...props} data={finalPokedexes} />
            )}

        </div>
    );
};

export default Main;