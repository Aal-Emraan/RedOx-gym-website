import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';

const Course = () => {

    const {id} = useParams();
    console.log(id);

    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('/plans.json')
        .then(res => res.json())
        .then(data => {
            const singleCourse = data.find(sc => id === sc.id);
            setCourse(singleCourse)
        })
    }, [id])

    return (
        <div className="flex container mx-auto img-thumbnail my-5 shadow">
            <div>
                {/* <h1 className="text-4xl font-semibold my-4">{title}</h1> */}
                <img src={course.img} alt="" />
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <h1 className="text-6xl my-5">{course.title}</h1>
                    <p className="text-2xl w-75 mx-auto mb-5">{course.description}</p>
                    <p className="text-3xl font-bold text-secondary mb-4">Price: {course.price}$</p>
                    <Link to="/purchase"><button className="btn btn-dark">Purchase Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Course;