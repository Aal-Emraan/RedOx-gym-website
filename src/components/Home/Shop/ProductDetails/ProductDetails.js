import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProductDetails = () => {

    const {pid} = useParams();

    const [course, setCourse] = useState([]);
    const {title, img, description, price} = course;

    useEffect(() => {
        fetch('/products.json')
        .then(res => res.json())
        .then(data => {
            const singleCourse = data.find(sc => pid === sc.id);
            setCourse(singleCourse)
        })
    }, [pid])

    console.log(course)

    return (
        <div className="row container mx-auto img-thumbnail my-5 shadow">
            <div className="col-md-5">
                {/* <h1 className="text-4xl font-semibold my-4">{title}</h1> */}
                <img src={img} alt="" />
            </div>
            <div className="col-md-7 flex justify-center items-center">
                <div>
                    <h1 className="text-6xl my-5">{title}</h1>
                    <p className="text-2xl mb-5">{description}</p>
                    <p className="text-3xl text-secondary font-semibold mb-4">Price: {price}</p>
                    <Link to="/purchase"><button className="btn btn-dark mb-3">Purchase Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;