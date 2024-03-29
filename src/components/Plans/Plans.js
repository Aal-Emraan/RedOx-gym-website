import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Plan from './Plan/Plan';

const Plans = () => {

    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetch('./fakeData/plans.json')
        .then(res => res.json())
        .then(data => setPlans(data))
    }, [])

    const specialPlans = plans.slice(0,6);

    return (
        <div className='row container mx-auto g-5 my-5'>
            <h1 className="text-4xl">Our Special Plans</h1>
            {
                specialPlans.map(plan => <Plan key={plan.title} plan={plan}></Plan>)
            }
            <Link to="/plans"><button className="btn btn-dark">View All Plans</button></Link>
        </div>
    );
};

export default Plans;