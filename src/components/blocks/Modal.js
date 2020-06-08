import React from 'react';
import { Modal } from 'antd';

const PokedexModal = (props) => {
  const { modalOpen, data, handleCancel } = props
  return (
    <Modal
      title={data.name}
      visible={modalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <img src={data.sprites.front_default} alt='pokemon'></img>
      {data.height}
      {data.weight}
      {data && data.base_experience}
      {data && JSON.stringify(data.stats)}
      Moves
    </Modal>
  );
};

export default PokedexModal;