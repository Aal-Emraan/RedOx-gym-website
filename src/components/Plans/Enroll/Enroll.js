import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Enroll = () => {

    const [id] = useParams();

    const [plans, setPlans] = useState([])

    useEffect(() => {
        fetch('./fakeData/plans.json')
        .then(res => res.json())
        .then(data => setPlans(data))
    },[])
    return (
        <div>
            <h1>this is enroll {id}</h1>
        </div>
    );
};

export default Enroll;