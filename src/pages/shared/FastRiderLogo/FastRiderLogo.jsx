import React from 'react';
import logo from "../../../assets/logo.png";
import { Link } from 'react-router';

const FastRiderLogo = () => {
    return (
        <Link to="/">
            <div className='flex items-center'>
                <img className='mb-6' src={logo} alt="" />
                <p className='text-3xl font-bold -ml-2'>
                    FastRider
                </p>
            </div>
        </Link>
    );
};

export default FastRiderLogo;