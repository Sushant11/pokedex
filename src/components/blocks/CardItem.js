import React, { useState, Fragment } from 'react';
import { Card, Divider } from 'antd';

import PokedexModal from './Modal';

const CardItem = props => {
    const { i, index, data } = props
    const [modalOpen, setModalOpen] = useState(false)

    const handleClick = () => {
        setModalOpen(true);
    }

    const handleCancel = () => {
        setModalOpen(false);
    }


    return (
        <Fragment>
            <Card style={{ width: 180 }} className='poke-card animate__animated animate__fadeIn' key={index} onClick={handleClick}>
                <img src={i.sprites.front_default} alt="Test" />
                <Divider />
                <p className='pokeName'>{i.name}</p>
            </Card>
            <PokedexModal modalOpen={modalOpen} handleCancel={handleCancel} data={data[index]} />
        </Fragment>
    );
};

export default CardItem;