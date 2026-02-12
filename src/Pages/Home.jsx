import React from 'react';
import Hero from '../Components/Hero.jsx';
import Service from '../Components/ServiceSection.jsx';
import About from '../Components/About.jsx';
import Portfolio from '../Components/Portfolio.jsx';

function Home() {
    return (
        <>
            <Hero />
            <Service />
            <About />
            <Portfolio />
        </>
    );
}

export default Home;
