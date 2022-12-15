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
                <div className="modal-box w-[500px] h-[400px]" style={{
                    backgroundImage: `url(${picture2})`
                }}>
                    <label onClick={handleClose} htmlFor="portfolio-Modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex'>
                        <div className='w-3/5'>
                            <figure><img src={data.image} className='w-[250px] h-[200px]' alt="Shoes" /></figure>
                            <div className='flex flex-wrap mt-3'>
                                <div>
                                    <a href={data.code_link} target='_blank'><label className="btn rounded py-1 px-2 mr-2 font-medium tracking-wide text-white text-sm transition duration-200 rounded shadow-md bg-[#09A8EC] hover:bg-[#026b97] focus:shadow-outline focus:outline-none">Client Side <VscLink className='text-lg ml-1 font-medium'></VscLink></label></a>
                                </div>
                                <div>
                                    <a href={data.server_side} target='_blank'><label className="btn rounded py-1 px-2 mr-2 font-medium tracking-wide text-white text-sm transition duration-200 rounded shadow-md bg-[#d62882] hover:bg-[#EF2E92] focus:shadow-outline focus:outline-none">Server Side <VscLink className='text-lg ml-1 font-medium'></VscLink></label></a>
                                </div>
                                <div>
                                    <a href={data.live_site}><label className="btn py-1 px-2 ml-10 mt-3 font-medium tracking-wide text-white text-sm transition duration-200 rounded bg-[#386455] hover:bg-[#15bd82] shadow-md  focus:shadow-outline focus:outline-none">Live website<VscSourceControl className='text-lg ml-1 font-medium'></VscSourceControl></label></a>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/5'>
                            <h3 className="font-bold text-lg text-white">{data.Projects_name}</h3>
                            <p className="py-4 text-white">{data.details}</p>
                            <h3 className="text-xl font-medium text-white">Technology</h3>
                            <div className='flex flex-wrap mt-3'>
                                <div className="badge  badge-accent badge-outline mr-3">JavaScript</div>
                                <div className="badge  badge-accent badge-outline ">React</div>
                                <div className="badge  badge-accent badge-outline mr-3 mt-2">NodeJs</div>
                                <div className="badge badge-accent badge-outline mt-2">MongoDb</div>
                                <div className="badge badge-accent badge-outline mt-2">Firebase</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfoilioModal;