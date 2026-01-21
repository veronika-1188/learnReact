import React from 'react'
import './experience.css'
import { HiBadgeCheck } from "react-icons/hi";

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skill I Have</h5>
        <h2>My Experience</h2>

        <div className="experience__content">
            <article className='experience__content-card'>
                <h3>Frontend Development</h3>
                <div className="card__languages">
                    <div className="languages__column">
                        <div className="language">
                            <HiBadgeCheck className='experience__icon'/>
                            <div className="language__text">
                                <h5>HTML</h5>
                                <small>Experienced</small>
                            </div>
                        </div>
                        <div className="language">
                            <HiBadgeCheck className='experience__icon'/>
                            <div className="language__text">
                                <h5>JavaScript</h5>
                                <small>Experienced</small>
                            </div>
                        </div>
                        <div className="language">
                            <HiBadgeCheck className='experience__icon'/>
                            <div className="language__text">
                                <h5>Tailwind</h5>
                                <small>Experienced</small>
                            </div>
                        </div>
                    </div>

                     <div className="languages__column">
                        <div className="language">
                            <HiBadgeCheck className='experience__icon'/>
                            <div className="language__text">
                                <h5>CSS</h5>
                                <small>Experienced</small>
                            </div>
                        </div>
                        <div className="language">
                            <HiBadgeCheck className='experience__icon'/>
                            <div className="language__text">
                                <h5>Bootstrap</h5>
                                <small>Experienced</small>
                            </div>
                        </div>
                        <div className="language">
                            <HiBadgeCheck className='experience__icon'/>
                            <div className="language__text">
                                <h5>React</h5>
                                <small>Experienced</small>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <article className='experience__content-card'>
                <h3>Backend Development</h3>
                <div className="card__languages">
                    <div className="languages__column">
                        <div className="language">
                            <HiBadgeCheck className='experience__icon'/>
                            <div className="language__text">
                                <h5>Node JS</h5>
                                <small>Intermediate</small>
                            </div>
                        </div>
                        <div className="language">
                            <HiBadgeCheck className='experience__icon'/>
                            <div className="language__text">
                                <h5>PHP</h5>
                                <small>Basic</small>
                            </div>
                        </div>
                        <div className="language">
                            <HiBadgeCheck className='experience__icon'/>
                            <div className="language__text">
                                <h5>MongoDB</h5>
                                <small>Experienced</small>
                            </div>
                        </div>
                    </div>

                     <div className="languages__column">
                        <div className="language">
                            <HiBadgeCheck className='experience__icon'/>
                            <div className="language__text">
                                <h5>MySQL</h5>
                                <small>Intermediate</small>
                            </div>
                        </div>
                        <div className="language">
                            <HiBadgeCheck className='experience__icon'/>
                            <div className="language__text">
                                <h5>Django</h5>
                                <small>Intermediate</small>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Experience