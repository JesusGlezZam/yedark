import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
           
            <img src='/yedarklogo.png' alt='Logo' className='logo-img' />
        </div>
        
        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/quienes-somos" className={({isActive}) => isActive ? "active" : ""}>¿Quiénes Somos?</NavLink>
                </li>
                <li>
                    <NavLink to="/servicios" className={({isActive}) => isActive ? "active" : ""}>Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/ubicacion_contacto" className={({isActive}) => isActive ? "active" : ""}>Ubicacion y Contacto</NavLink>
                </li>
            </ul>
        </nav>

    </header>
  )
}
