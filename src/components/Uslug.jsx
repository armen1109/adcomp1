import React from 'react'
import Card from './Card'
import api from '../api'
import { NavLink } from 'react-router-dom'

function Uslug() {
  return (
    <>
    <p className='u-text'>Наши Услуги</p>
    <div className='nash-uslug'>
    {api.map((e, i) => {
                    return (  
                      <NavLink key={e.id} to={`/services/${e.id}`}> 
                        <Card img={e.img} name={e.name}/>
                         </NavLink>
                    )
            })}
    </div>
    </>
  )
}

export default Uslug