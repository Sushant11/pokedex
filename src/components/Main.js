import React, { useEffect, useState } from 'react';
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

import { isEmpty } from '../utils/commonUtils';
import CardItem from './blocks/CardItem';
import CardItemIndividual from './blocks/CardItemIndividual';

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: '#222c81' }} spin />;


const Main = props => {
    const { pokedexes, pokedexDetails, pokedexDetailLoading, fetchPokedexDetail, pokedexArrayStoreRequest, pokedexArray, pokedexSearches } = props
    const [detailsArray, setDetailsArray] = useState([])
    console.log(pokedexArray)
    useEffect(() => {
        if (pokedexes && pokedexes.length !== 0) {
            pokedexes.forEach(element => {
                fetchPokedexDetail(element.url)
            });
        }
    }, [])

    detailsArray.push(pokedexDetails)

    const finalPokedexes = detailsArray.filter(element => !isEmpty(element))

    if (finalPokedexes && finalPokedexes.length === 20) {
        pokedexArrayStoreRequest(finalPokedexes)
    }

    console.log('pokedexArray :>> ', pokedexArray);


    return (
        <div className='main'>
            {pokedexDetailLoading ? <div className='spin'><Spin indicator={antIcon} /></div> : pokedexArray && pokedexArray.map((i, index) =>
                <CardItem i={i} index={index} key={index} {...props} data={pokedexArray} />
            )}

            {Array.isArray(pokedexSearches) ? pokedexSearches.map((i, index) =>
                <CardItem i={i} index={index} key={index} {...props} data={pokedexSearches} />) : <CardItemIndividual {...props} data={pokedexSearches} />}

        </div>
    );
};

export default Main;