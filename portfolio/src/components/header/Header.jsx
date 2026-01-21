import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>Anna Santer</h1>
            <h1 className='text-light'>Fullstack Developer</h1>
            <CTA/>
            <div className='me'>
                <img src={ME} alt="me" />
            </div>
            <a href="#contact" className='scroll__down'>Show Down</a>
            <HeaderSocials/>
        </div>
    </header>
  )
}

export default Header