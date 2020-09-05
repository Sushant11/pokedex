import React, { Fragment } from 'react';
import { Modal, Divider, Progress, Badge } from 'antd';

const PokedexModal = (props) => {
  const { modalOpen, data, handleCancel } = props

  return (
    <Modal
      title={data.name}
      visible={modalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <div className='basicInfo'>
        <div> <img src={data.sprites.front_default} alt='pokemon'></img></div>
        <div>
          <div> {data.types.map(i => <Badge count={i.type.name} className='type' />)}</div>
          <div className='info'><div>Height: {data.height}</div>
            <div>Weight:{data.weight}</div>
            <div>XP:{data.base_experience}</div>
          </div>

        </div>
      </div>
      <Divider>Stats</Divider>
      <div>{data.stats.map(i => <Fragment><span>{i.stat.name}</span><Progress strokeColor={'#38C758'} percent={i.base_stat} showInfo={false} /></Fragment>)}</div>
    </Modal>
  );
};

export default PokedexModal;