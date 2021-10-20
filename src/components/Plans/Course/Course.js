import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Course = () => {

    const {id} = useParams();
    console.log(id);

    const [cours, setCours] = useState({});

    useEffect(() => {
        fetch('/plans.json')
        .then(res => res.json())
        .then(data => {
            const singleCourse = data.find(sc => id === sc.id);
            setCours(singleCourse);
        })
    }, [id])

    return (
        <div className="flex container mx-auto img-thumbnail my-5 shadow">
            <div>
                {/* <h1 className="text-4xl font-semibold my-4">{title}</h1> */}
                <img src={cours.img} alt="" />
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <h1 className="text-6xl mt-5 mb-2">{cours.title}</h1>
                    <p className="text-xl font-semibold mb-4 text-red-900">Trainer: {cours.trainer}</p>
                    <p className="text-xl w-75 mx-auto mb-2 italic"><strong>Description: </strong>{cours.description}</p>
                    <p className="text-3xl font-bold text-secondary mb-4">Price: {cours.price}$</p>
                    <Link to="/purchase"><button className="btn btn-dark">Purchase Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Course;