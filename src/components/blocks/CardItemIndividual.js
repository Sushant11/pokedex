import React, { useState, Fragment } from 'react';
import { Card, Divider } from 'antd';

import PokedexModal from './Modal';

const CardItemIndividual = props => {
    const {data} = props
    const [modalOpen, setModalOpen] = useState(false)

    const handleClick = () => {
        setModalOpen(true);
    }

    const handleCancel = () => {
        setModalOpen(false);
    }


    return (
        <Fragment>
            <Card style={{ width: 180 }} className='poke-card animate__animated animate__fadeIn' onClick={handleClick}>
                <img src={data.sprites.front_default} alt="Test" />
                <Divider />
                <p className='pokeName'>{data.name}</p>
            </Card>
            <PokedexModal modalOpen={modalOpen} handleCancel={handleCancel} data={data} />
        </Fragment>
    );
};

export default CardItemIndividual;