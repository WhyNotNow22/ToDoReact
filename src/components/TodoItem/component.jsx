import React from 'react'
import { Button, Input } from 'antd'
import {
  UpCircleOutlined,
  DownCircleOutlined,
  CloseCircleOutlined,
  EditOutlined
} from '@ant-design/icons';
import { Draggable } from 'react-beautiful-dnd'
import './style.css'

function TodoItem(props) {
  const { readOnly, value, onChange, onBlur, moveTask, changeTask, deleteTask, onClick, enterPressed, id, indexDnD } = props;
  const { TextArea } = Input;
  return (
    <Draggable
      disableInteractiveElementBlocking={readOnly}
      key={id}
      draggableId={String(id)}
      index={indexDnD}
    >
      {(provided) => {
        return (
          <div
            className='todo-item'
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <TextArea
              className='title'
              bordered={false}
              value={value}
              readOnly={readOnly}
              onChange={onChange}
              onBlur={onBlur}
              onClick={onClick}
              onPressEnter={enterPressed}
              autoSize
            />
            <div className='buttons-container'>
              <Button className='move' icon={<UpCircleOutlined />} onClick={moveTask} />
              <Button className='change' icon={<EditOutlined />} onClick={changeTask} />
              <Button className='move' icon={<DownCircleOutlined />} onClick={moveTask} />
              <Button className='delete' icon={<CloseCircleOutlined />} onClick={deleteTask} />
            </div>
          </div>
        )
      }}
    </Draggable>
  )
}

export default TodoItem
