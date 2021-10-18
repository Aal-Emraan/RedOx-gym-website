import React from 'react';

const Tutors = () => {
    return (
        <div className="container mx-auto my-5">
            <h1 className="text-4xl mb-4">Our Specialized Tutors</h1>
            <div className="flex">
                    <div className="card">
                    <img src="https://www.bollywikia.com/wp-content/uploads/2020/05/hrithik-roshan.jpg" className="card-img-top" alt="..."/>
                    </div>
                    <div className="">
                        <h5 className="">Card title</h5>
                        <p className="">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
            </div>
            <div className="flex">
                    <div className="">
                        <h5 className="">Card title</h5>
                        <p className="">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card">
                    <img src="https://i.pinimg.com/originals/a2/93/a2/a293a2af49ff462679e2aa79b19e2fd8.jpg" className="card-img-top" alt="..."/>
                    </div>
            </div>
            <div className="flex">
                    <div className="card">
                    <img src="https://gymbeam.cz/blog/wp-content/uploads/2016/11/scott-adkins.jpg" className="card-img-top" alt="..."/>
                    </div>
                    <div className="">
                        <h5 className="">Card title</h5>
                        <p className="">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
            </div>
        </div>
    );
};

export default Tutors;