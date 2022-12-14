import React from 'react';
import picture2 from '../../assets/images/cover.jpg'
import { VscLink, VscSourceControl } from 'react-icons/vsc'

const PortfoilioModal = ({ data, setProjectData }) => {

    const handleClose = () => {
        setProjectData(null)
    }

    return (
        <div>
            <input type="checkbox" id="portfolio-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box" style={{
                    backgroundImage: `url(${picture2})`
                }}>
                    <label onClick={handleClose} htmlFor="portfolio-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex'>
                        <div className='w-1/2'>
                            <figure><img src={data.image} className='w-[200px] h-[200px]' alt="Shoes" /></figure>
                        </div>
                        <div className='w-1/2'>
                            <h3 className="font-bold text-lg text-white">{data.Projects_name}</h3>
                            <p className="py-4 text-white">{data.details}</p>
                            <div className='flex'>
                                <div>
                                    <a href={data.code_link} target='_blank'><label className="btn py-1 px-2 mr-2 font-medium tracking-wide text-white text-sm transition duration-200 rounded shadow-md bg-[#37715D] hover:bg-[#187051] focus:shadow-outline focus:outline-none">Code Link <VscLink></VscLink></label></a>
                                </div>
                                <div>
                                    <a href={data.live_site}><label className="btn py-1 px-2  font-medium tracking-wide text-white text-sm transition duration-200 rounded shadow-md bg-[#37715D] hover:bg-[#187051] focus:shadow-outline focus:outline-none">Live website<VscSourceControl></VscSourceControl></label></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfoilioModal;