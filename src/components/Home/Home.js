import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Plans from '../Plans/Plans';
import Shop from './Shop/Shop';
import Tutors from './Tutors/Tutors';

const Home = () => {
    return (
        <div>    
            <LandingPage></LandingPage>
            <Plans></Plans>
            <Tutors></Tutors>
            <Shop></Shop>
        </div>
    );
};

export default Home;