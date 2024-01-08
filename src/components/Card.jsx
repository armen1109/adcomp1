import React from 'react'

function Card({img, name}) {
  return (
    <div className='card'>
      <div className="card-image">
        <img src={img} alt="" />
      </div>
        <p className='card-name'>{name}</p>

    </div>
  )
}

export default Card