import React from 'react';
import Banner from '../Banner/Banner';
import OurServices from '../OurServices/OurServices';
import CompanySlider from '../CompanySlider/CompanySlider';
import FeatureTimeline from '../FeatureTimeline/FeatureTimeline';
import MerchantPromoCard from '../MerchantPromoCard/MerchantPromoCard';

const Home = () => {
    return (
        <div className='md:mx-20 mx-4 my-8'>
            <Banner></Banner>
            <OurServices></OurServices>
            <CompanySlider></CompanySlider>
            <FeatureTimeline></FeatureTimeline>
            <MerchantPromoCard></MerchantPromoCard>
        </div>
    );
};

export default Home;