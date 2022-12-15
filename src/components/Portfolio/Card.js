import React, { useState } from 'react';
import PortfoilioModal from './PortfoilioModal';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Card = ({ data }) => {
    const [projectData, setProjectData] = useState(null)
    return (
        <div>
            <div className='mb-10 mt-10'>
                <div className="card card-compact w-96 bg-base-100 shadow-2xl">
                    <PhotoProvider>
                        <PhotoView src={data.image}>
                            <figure><img src={data.image} className='w-[300px] h-[300px] shadow-xl' alt="Shoes" /></figure>
                        </PhotoView>
                    </PhotoProvider>

                    <div className="card-body">
                        <h2 className="card-title">{data.Projects_name}</h2>
                        <p>{data.details}</p>
                        <div className="card-actions justify-end">
                            <label onClick={() => setProjectData(data)} htmlFor="portfolio-Modal" className="btn py-4 px-6 mr-6 font-medium tracking-wide rounded hover:text-gray-100 bg-gradient-to-r from-[#4070F4] to-[#2A42DD] text-white">Details</label>
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