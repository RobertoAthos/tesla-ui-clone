import React from 'react'
import './Header-styles.css'
import TeslaLogo from '../../assets/teslaLogoSmall.svg'

function Header() {
  return (
    <div className='header'>
        <div className='header-logo'>
            <img src={TeslaLogo} alt='Tesla logo'/>
        </div>
        <div className='header-center'>
            <nav >
                    <a href='#'>Model S</a>
                    <a href='#'>Model 3</a>
                    <a href='#'>Model X</a>
                    <a href='#'>Model Y</a>
                    <a href='#'>Solar Roof</a>
                    <a href='#'>Solar Panel</a>
            </nav>
        </div>

        <div className='header-right'>
           <nav>
            <a href='#'>Shop</a>
              <a href='#'>Account</a>
              <a href='#'id='active'>Menu</a>
           </nav>
        </div>
    </div>
  )
}

export default Header