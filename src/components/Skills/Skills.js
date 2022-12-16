import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaNodeJs } from 'react-icons/fa'
import './Skills.css'
import skill from '../../assets/images/skills.png'
const Skills = () => {
    return (
        <section className="skills section mt-[100px]" id="skills">
            <h2 className="text-3xl divider mx-96 text-center sm:text-left md:text-left font-bold text-[#4070F4]">My Skills</h2>

            <div className="flex flex-col justify-between max-w-xl px-4 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl sm:pt-5">
                <div>
                    <h2 className="text-xl mb-5 text-center font-medium">Professional Skills</h2>
                    <p className="skills__text mb-5">Every industry ‒ and even every job ‒ calls for a unique set of skills. Here is a breakdown of some of the hard and soft skills that are important in popular industries.</p>
                    <div className="skills__data mb-6">
                        <div className="skills__names">
                            <i className='skills__icon mr-2'><FaHtml5></FaHtml5></i>
                            <span className="skills__name">HTML5</span>
                        </div>
                        <div className="skills__bar skills__html">

                        </div>
                        <div>
                            <span className="skills__percentage">95%</span>
                        </div>
                    </div>
                    <div className="skills__data mb-6">
                        <div className="skills__names">
                            <i className='skills__icon mr-2'><FaCss3Alt></FaCss3Alt></i>
                            <span className="skills__name">CSS3</span>
                        </div>
                        <div className="skills__bar skills__css">

                        </div>
                        <div>
                            <span className="skills__percentage">90%</span>
                        </div>
                    </div>
                    <div className="skills__data mb-6">
                        <div className="skills__names">
                            <i className='skills__icon mr-2'><FaJsSquare></FaJsSquare></i>
                            <span className="skills__name">JAVASCRIPT</span>
                        </div>
                        <div className="skills__bar skills__js">

                        </div>
                        <div>
                            <span className="skills__percentage">85%</span>
                        </div>
                    </div>
                    <div className="skills__data mb-6">
                        <div className="skills__names">
                            <i className='skills__icon mr-2'><FaNodeJs></FaNodeJs></i>
                            <span className="skills__name">NodeJs</span>
                        </div>
                        <div className="skills__bar skills__ux">

                        </div>
                        <div>
                            <span className="skills__percentage">75%</span>
                        </div>
                    </div>
                    <div className="skills__data mb-6">
                        <div className="skills__names">
                            <i className='skills__icon mr-2'><FaReact></FaReact></i>
                            <span className="skills__name">React</span>
                        </div>
                        <div className="skills__bar skills__react">

                        </div>
                        <div>
                            <span className="skills__percentage">80%</span>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={skill} alt="" className="skills__img" />
                </div>
            </div>
        </section>
    );
};

export default Skills;