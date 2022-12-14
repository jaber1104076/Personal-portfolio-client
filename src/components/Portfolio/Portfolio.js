import React from 'react';
import Card from './Card';

const Portfolio = () => {
    const projectsData = [
        {
            id: 1,
            Projects_name: 'Edu Care Solution',
            comments: 300,
            details: "Educare Solution is a Learninig application where a student can easily learn about many things.",
            image: "https://i.ibb.co/ScBXzPR/Educare-Solution.png",
            live_site: "https://educare-build-future.web.app/",
            code_link: "https://github.com/jaber1104076/Educare-Solution-Client",
        },
        {
            id: 2,
            Projects_name: 'Go Food',
            comments: 400,
            details: "Apart from being convenient and reliable, food delivery services are also a way for customers",
            image: "https://i.ibb.co/xhb5Kk5/GoFood.png",
            live_site: "https://go-food-c107c.web.app/home",
            code_link: "https://github.com/jaber1104076/Go-food-client",
        },
        {
            id: 3,
            Projects_name: 'The Resal Emporium',
            comments: 600,
            details: "This website will deal with the used phone resale or used phone resycle for the future investment",
            image: "https://i.ibb.co/m66nRNy/The-Resal-Emporium.png",
            live_site: "https://the-resale-emporium.web.app/",
            code_link: "https://github.com/jaber1104076/The-Resale-Emporium-client",
        },
    ]
    return (
        <div>
            <h3 className="text-center text-3xl font-bold mb-5 mt-5">Portfolio</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mx-20'>
                {
                    projectsData.map(data => <Card
                        key={data.id}
                        data={data}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Portfolio;