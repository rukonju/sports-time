import React from 'react';
import LaLiga from '../LaLiga/LaLiga';
import Sports from '../Sports/Sports';
import Stadium from '../Stadium/Stadium';


const Home = () => {
    return (
        <div>
            <h1 data-aos="fade-up">All type of sports</h1>
           <Sports></Sports> 
           <LaLiga></LaLiga>
           <Stadium></Stadium>
        </div>
    );
};

export default Home;