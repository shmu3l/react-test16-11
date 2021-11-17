import React, { useContext, useState } from 'react'
import { GameContext } from '../contexts/GameContext'
import { Form, Modal, Button, Input } from 'antd';

const AddGameForm = () => {
  const { handleNewGame } = useContext(GameContext)
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = (values) => {
    handleNewGame(values.name)
    form.resetFields()
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Game
      </Button>
      <Modal footer={[
        <Button form="addGame" key="submit" htmlType="submit">
          Save
        </Button>
      ]} title="Add Game" visible={isModalVisible} onCancel={() => setIsModalVisible(false)}>
        <Form
          id="addGame"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Missing Game Name...' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default AddGameForm
