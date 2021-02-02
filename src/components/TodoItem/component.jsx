import React from 'react'
import { Button, Input } from 'antd'
import {
  UpCircleOutlined,
  DownCircleOutlined,
  CloseCircleOutlined,
  EditOutlined
} from '@ant-design/icons';
import './style.css'

function TodoItem(props) {
  const { readOnly, value, onChange, onBlur, moveTask, changeTask, deleteTask, onClick } = props;
  const { TextArea } = Input;
  return (
    <div className='todo-item'>
      <TextArea
        className='title'
        autoSize
        bordered={false}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
        onBlur={onBlur}
        onClick={onClick}
      />
      <div className='buttons-container'>
        <Button className='move' icon={<UpCircleOutlined />} onClick={moveTask} />
        <Button className='change' icon={<EditOutlined />} onClick={changeTask} />
        <Button className='move' icon={<DownCircleOutlined />} onClick={moveTask} />
        <Button className='delete' icon={<CloseCircleOutlined />} onClick={deleteTask} />
      </div>
    </div>
  )
}

export default TodoItem
