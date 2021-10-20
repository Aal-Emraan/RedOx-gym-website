import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProductDetails = () => {

    const {pid} = useParams();

    const [course, setCourse] = useState([]);
    const {title, img, description, price, weight} = course;

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
            <div className="col-md-5 flex justify-center items-center">
                <img src={img} alt="" className="w-100 img-thumbnail"/>
            </div>
            <div className="col-md-7 flex justify-center items-center">
                <div>
                    <h1 className="text-4xl my-4">{title}</h1>
                    <p className="text-xl text-start text-gray-700 mb-3 italic"><strong>Description: </strong>{description}</p>
                    <p className="text-xl font-semibold mb-3 text-start">Weight: {weight}</p>
                    <p className="text-3xl font-semibold mb-3">Price: {price} Tk</p>
                    <Link to="/purchase"><button className="btn btn-dark mb-3">Purchase Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;