import React from 'react'
import './Header-styles.css'
import TeslaLogo from '../../assets/teslaLogoSmall.svg'

function Header() {
  return (
    <div className='header'>
        <div className='header-logo'>
            <img src={TeslaLogo} alt='Tesla logo'/>
        </div>
        <nav className='header-center'>
                <a href='#'>Model S</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model X</a>
                <a href='#'>Model Y</a>
                <a href='#'>Solar Roof</a>
                <a href='#'>Solar Panel</a>
        </nav>

        <div className='header-right'>
            <a href='#'>Shop</a>
            <a href='#'>Account</a>
            <a href='#'>Menu</a>
        </div>
    </div>
  )
}

export default Header