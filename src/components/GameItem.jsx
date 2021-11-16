import React, { useState, useContext } from 'react'
import { GameContext } from '../contexts/GameContext'
import { List, Modal, Button, } from 'antd';
import EditGameForm from '../components/EditGameForm';

const GameItem = ({ game }) => {
  const { handleDeleteGame } = useContext(GameContext)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  }

  const handleRemoveGame = () => {
    handleDeleteGame(game.id)
  }


  return (
    <List.Item
      key={game.id}
      actions={[
        <>
          <Button type="secondary" onClick={showModal}>
            Edit
          </Button>
          <Modal footer={[
            <Button form={game.id} key="submit" htmlType="submit">
              Save
            </Button>
          ]} title="Edit Game" visible={isModalVisible} onOk={closeModal} onCancel={closeModal}>
            <EditGameForm formId={game.id} gameId={game.id} />
          </Modal>
        </>,
        <Button type="danger" onClick={handleRemoveGame}>
          Remove
        </Button>
      ]}
    >
      <List.Item.Meta
        title={game.name}
        description={`${game.name} description`}
      />
    </List.Item>
  )
}

export default GameItem