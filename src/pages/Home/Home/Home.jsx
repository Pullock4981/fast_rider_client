import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div className='md:mx-20 mx-4 my-8'>
            <Banner></Banner>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;