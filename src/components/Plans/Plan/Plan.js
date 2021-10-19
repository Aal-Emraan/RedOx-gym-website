import React from 'react';
import { Link } from 'react-router-dom';

const Plan = (props) => {
    const {id,img, title, description} = props.plan
    return (
        <div className="col-md-4">
            <div className="shadow">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-2xl font-semibold">{title}</h5>
                <p className="card-text">{description}</p>
                <Link to={`/course/${id}`} className="btn btn-danger mt-3">Enroll Now</Link>
            </div>
            </div>
        </div>
    );
};

export default Plan;