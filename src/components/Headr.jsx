import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'

function Headr() {
  return (
    <header>
           <NavLink to={'/'}><img className='logo' src={process.env.PUBLIC_URL + 'logo.png'}/></NavLink> 
        <nav>
            <ul className='list'>
                <li className='list-item'><NavLink to={'/'}>Главная</NavLink></li>
                <li className='drop'><NavLink to={'/services'}>Наши Услуги</NavLink>
                <ul className='dorpdown-menu'>
                    <NavLink to={'/services/1'}><li className='dorpdown-item'> Ремонт компютеров</li></NavLink>
                    <NavLink to={'/services/2'}><li className='dorpdown-item'>Фотосувениры</li></NavLink> 
                    <NavLink to={'/services/3'}><li className='dorpdown-item'>Фото на документы</li></NavLink> 
                    <NavLink to={'/services/4'}><li className='dorpdown-item'> Восстановление старинных фотографий</li></NavLink>
                    <NavLink to={'/services/5'}><li className='dorpdown-item'>Модернизация компьютеров</li></NavLink>
                    <NavLink to={'/services/6'}><li className='dorpdown-item'>Восстановление данных</li></NavLink>
                    <NavLink to={'/services/7'}><li className='dorpdown-item'>Антивирусная защита</li></NavLink>
                    <NavLink to={'/services/8'}><li className='dorpdown-item'>Настройка программ</li></NavLink>
                </ul>
                </li>
                <li className='list-item'><NavLink to={'/contact-us'}>Обратная связь</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Headr