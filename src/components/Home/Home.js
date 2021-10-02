import React from 'react';
import LaLiga from '../LaLiga/LaLiga';
import Sports from '../Sports/Sports';


const Home = () => {
    return (
        <div>
            <h1 data-aos="fade-up">All type of sports</h1>
           <Sports></Sports> 
           <LaLiga></LaLiga>
        </div>
    );
};

export default Home;