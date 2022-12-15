import React from 'react';
import './Home.css'
import jaber from '../../assets/images/jaber3.png'
import { HiLink } from 'react-icons/hi'
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className="flex flex-col justify-between max-w-xl px-4 py-5 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl sm:pt-5">
            <div className="pt-10 mb-10 lg:mb-5 lg:pt-15 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                    <h2 className="max-w-lg mb-6 mt-3 font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                        I'm {' '}
                        <h2>
                            <span className="inline-block text-modify mt-8">
                                <Typewriter
                                    options={{
                                        strings: ['Front-End Developer', 'React Js Developer', 'Mern stack developer '],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </h2>
                    </h2>
                    <p className="text-black mt-8 md:text-lg">
                        I work with professionaly and CareFully So that I can build careers that fulfil my intellectually, financially
                    </p>
                </div>
                <div className="flex items-center">
                    <a
                        href="#Contact"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide rounded bg-gradient-to-r from-[#4070F4] to-[#2A42DD] text-white"
                    >
                        Get In Touch <HiLink className='ml-2'></HiLink>
                    </a>
                </div>
            </div>
            <div>
                <img
                    src={jaber}
                    className="object-cover object-top w-full h-52 mx-auto lg:h-auto xl:mr-10 md:max-w-sm"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Home;