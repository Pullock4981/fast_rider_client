import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import CompanySlider from '../CompanySlider/CompanySlider';

const Home = () => {
    return (
        <div className='md:mx-20 mx-4 my-8'>
            <Banner></Banner>
            <OurServices></OurServices>
            <CompanySlider></CompanySlider>
        </div>
    );
};

export default Home;