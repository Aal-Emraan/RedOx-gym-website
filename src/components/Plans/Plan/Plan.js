import React from 'react';
import { Link } from 'react-router-dom';

const Plan = (props) => {
    const {img, title, description} = props.plan
    return (
        <div className="col-4">
            <div className="card">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-2xl font-semibold">{title}</h5>
                <p className="card-text">{description}</p>
                <Link to="/enroll" className="btn btn-danger">Enroll Now</Link>
            </div>
            </div>
        </div>
    );
};

export default Plan;