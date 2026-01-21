import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={ME} alt="me" />
                </div>
            </div>
            <div className='about__content'>
                <div className='about__cards'>
                    <article className='about__card'>
                        <FaAward className='about__icon'/>
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>
                    <article className='about__card'>
                        <FaUsers className='about__icon'/>
                        <h5>Clients</h5>
                        <small>30+ Worldwide</small>
                    </article>
                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon'/>
                        <h5>Projects</h5>
                        <small>20+ Completed</small>
                    </article>
                </div>
                <p>Hi, I’m Anna Santer: full-stack web & app developer, amateur cook & fermentation hobbyist, gardener, tinkerer, and general curious person. I can conjure a website or app from nothing into existence, fully formed. I specialize in manipulating the very fabric of the web, its raw materials of HTML, CSS, JavaScript, and SVG. To launch these creations into the cosmos, I have studied the ancient tomes of sysadmin to create and control Linux servers, the golems of the cloud. Their true names are inscribed into the DNS so that all who speak their names may summon them.</p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About