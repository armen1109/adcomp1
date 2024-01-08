import React from 'react'
import Card from './Card'
import { NavLink } from 'react-router-dom'
import './style.css'
import api from '../api'
import 'animate.css';

function Home() {
  return (
    
    <div className='Home'>
        <div className='welcome'>
            <p className='welcome-text '>Добро Пожаловать</p>
            <p className='welcome-text'>в</p>
            <p className='welcome-text'>Центр Компьютерных Услуг</p>
        </div>
        <br />
        <p  className='uslug'>Наши Услуги</p>
        <div className='cards'>
        {api.map((e, i) => {
          if (i < 3 ) {
            return (  
                      <NavLink to={`/services/${e.id}`} key={e.id}> 
                        <Card img={e.img} name={e.name}/>
                         </NavLink>
                    )
          }
                    
            })}
        </div>
     <NavLink to={'/services'}>   <button className='view-more'>Посмотреть больше услуги</button></NavLink>
    </div>
  )
}

export default Home