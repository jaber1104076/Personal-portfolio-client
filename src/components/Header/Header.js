import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { HiDownload } from 'react-icons/hi'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleDownload = () => {
        toast.success('Well come to my Resume section')
    }
    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <a
                    href="/"
                    aria-label="Company"
                    className="inline-flex items-center"
                >
                    <span className="ml-2 text-2xl font-bold tracking-wide text-[#3C4043] uppercase">
                        Abdullah Al Jaber
                    </span>
                </a>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <a
                            href="/"
                            aria-label="home"
                            title="Home"
                            className="font-medium tracking-wide text-black hover:text-[#2A42DD] transition-colors duration-200"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            aria-label="skills"
                            title="skills"
                            className="font-medium tracking-wide text-black hover:text-[#2A42DD] transition-colors duration-200"
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#portfolio"
                            aria-label="Projects"
                            title="Projects"
                            className="font-medium tracking-wide text-black hover:text-[#2A42DD] transition-colors duration-200"
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#Contact"
                            aria-label="Contact"
                            title="Contact"
                            className="font-medium tracking-wide text-black hover:text-[#2A42DD] transition-colors duration-200"
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            aria-label="portfolio"
                            title="About Me"
                            className="font-medium tracking-wide text-black hover:text-[#2A42DD] transition-colors duration-200"
                        >
                            About Me
                        </a>
                    </li>
                </ul>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1R5VoQzopOYR_S57c7TEAE2bkvQ_jb9hm/view?usp=sharing"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide rounded  hover:text-gray-100 bg-gradient-to-r from-[#4070F4] to-[#2A42DD] text-white"
                            aria-label="download"
                            title="DownLoad Cv"
                            onClick={handleDownload}
                        >
                            Download Cv <HiDownload className='ml-2'></HiDownload>
                        </a>
                    </li>
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <a
                                            href="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                                                Abdullah Al Jaber
                                            </span>
                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Home"
                                                title="Home"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Services"
                                                title="Services"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Projects"
                                                title="Projects"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Projects
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Portfolio"
                                                title="Portfolio"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Portfolio
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-[#37715D] hover:bg-[#187051] focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Download Cv
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;