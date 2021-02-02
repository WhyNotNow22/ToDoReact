import React from 'react'
import { Button } from 'antd'
import '../../constants/routers'
import { BASE_URL } from '../../constants/routers'
import './style.css'

function TaskPage({ location, history}) {

  const prevPage = (history) => () => {
    history.push({
      pathname: BASE_URL,
    });
  }

  return (
    <div className='task-page-container'>
      <div className='task-page'>
        {location.state ? location.state.title : 'Wrong address!'}
      </div>
      <Button className='prev-page-button' onClick={prevPage(history)} type='primary'>Go to TaskList</Button>
    </div>
  )
}

export default TaskPage
