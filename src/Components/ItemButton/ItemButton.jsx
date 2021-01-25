import React from 'react'
import './ItemButton.css'


function ItemButton(props) {
  return (
    <div className='ItemButton' style={{color: props.color}}>
        {props.type}
    </div>
  );
}

export default ItemButton;