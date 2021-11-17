import React, { useContext, useEffect } from 'react'
import { GameContext } from '../contexts/GameContext'
import { Form, Input } from 'antd';

const EditGameForm = ({ gameId }) => {
  const { getSignalGameEdit, handleEditGame } = useContext(GameContext)
  const [form] = Form.useForm();

  useEffect(() => {
    async function initEditGame() {
      try {
        const response = await getSignalGameEdit(gameId);
        form.setFieldsValue(response)
      } catch (err) {
        console.log(err)
      }
    }
    initEditGame();
    return () => form.resetFields();
  }, [])

  const onFinish = (values) => {
    console.log('@onfinish', gameId)
    handleEditGame(gameId, values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', form);
  };

  return (
    <Form
      id={gameId}
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
  )
}

export default EditGameForm
