import React, { useEffect, useState } from 'react';
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
            <button className="btn btn-primary">View All Plans</button>
        </div>
    );
};

export default Plans;