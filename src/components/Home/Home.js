import React from 'react';
import './Home.css'
import jaber from '../../assets/images/jaber2.png'
import { HiDownload } from 'react-icons/hi'

const Home = () => {
    return (
        <div className="flex flex-col justify-between max-w-xl px-4 py-5 mx-auto lg:pt-16 lg:flex-row md:px-8 lg:max-w-screen-xl sm:pt-5">
            <div className="pt-10 mb-10 lg:mb-5 lg:pt-15 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl mb-6">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                        I Am A {' '}
                        <span className="inline-block text-modify" data-text='developer...'>
                            front-End Developer...
                        </span>
                    </h2>
                    <p className="text-base text-white md:text-lg">
                        I work with professionaly and CareFully So that I can build careers that fulfil my intellectually, financially
                    </p>
                </div>
                <div className="flex items-center">
                    <a
                        href="/"
                        className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#37715D] hover:bg-[#187051] focus:shadow-outline focus:outline-none"
                    >
                        Get In Touch <HiDownload className='ml-2'></HiDownload>
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