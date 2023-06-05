import React from 'react';
import { FaFacebook, FaWhatsapp, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-4 text-white flex flex-col">
                <div className="items-center grid-flow-col">
                    <p className='text-xl'>Copyright © 2022 - All right reserved to Abdullah Al Jaber</p>
                </div>
                <div className='flex justify-between text-3xl'>
                    <FaFacebook></FaFacebook>
                    <FaWhatsapp></FaWhatsapp>
                    <FaGithub></FaGithub>
                </div>
            </footer>
        </div>
    );
};

export default Footer;