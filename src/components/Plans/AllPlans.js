import React, { useEffect, useState } from 'react';
import Plan from './Plan/Plan';

const AllPlans = () => {

    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetch('./fakeData/plans.json')
        .then(res => res.json())
        .then(data => setPlans(data))
    }, [])

    return (
        <div className='row container mx-auto g-5 my-5'>
            <h1 className="text-4xl">Our Special Plans</h1>
            {
                plans.map(plan => <Plan key={plan.id} plan={plan}></Plan>)
            }
        </div>
    );
};

export default AllPlans;