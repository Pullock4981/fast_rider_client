import React from 'react';
import logo from "../../../assets/logo.png";

const FastRiderLogo = () => {
    return (
        <div className='flex items-center'>
            <img className='mb-6' src={logo} alt="" />
            <p className='text-3xl font-bold -ml-2'>
                FastRider
            </p>
        </div>
    );
};

export default FastRiderLogo;