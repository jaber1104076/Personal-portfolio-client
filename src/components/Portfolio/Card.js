import React, { useState } from 'react';
import PortfoilioModal from './PortfoilioModal';

const Card = ({ data }) => {
    const [projectData, setProjectData] = useState(null)
    return (
        <div>
            <div className='mt-5 mb-10'>
                <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                    <figure><img src={data.image} className='w-[300px] h-[300px] shadow-xl' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.Projects_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <label onClick={() => setProjectData(data)} htmlFor="portfolio-Modal" className="btn py-4 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#37715D] hover:bg-[#187051] focus:shadow-outline focus:outline-none">Details</label>
                        </div>
                    </div>
                </div>
            </div>
            {projectData &&
                <PortfoilioModal
                    data={projectData}
                    setProjectData={setProjectData}
                ></PortfoilioModal>}
        </div>
    );
};

export default Card;