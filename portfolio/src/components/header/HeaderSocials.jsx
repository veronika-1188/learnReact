import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="linkedin.com" target=" blank"><BsLinkedin /></a>
        <a href="github.com" target=" blank"><FaGithub /></a>
        <a href="dribbble.com" target=" blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials