import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto py-28 shadow mt-5">
            <div>
                <h2 className="text-4xl font-bold mt-2"><span className="text-red-700">Red</span><span className="">Ox</span></h2>
            </div>
            <h1 className="text-2xl mb-5">Gym Center</h1>

            <p className="w-75 mx-auto text-gray-500">A gymnasium, also known as a gym, is a covered location for athletics. The word is derived from the ancient Greek gymnasium.[1] They are commonly found in athletic and fitness centres, and as activity and learning spaces in educational institutions. "Gym" is also slang for "fitness centre", which is often an area for indoor recreation. A gym may be open air as well. A gym is a place with a number of equipments and machines used by the people to do exercises.</p>
            <button className="btn bg-red-700 text-white mt-5">Contact Us</button>
        </div>
    );
};

export default About;