import React from 'react';
import { Outlet } from 'react-router';
import authImg from "../assets/authImage.png"
import FastRiderLogo from '../pages/shared/FastRiderLogo/FastRiderLogo';

const AuthLayout = () => {
    return (
        <div className="bg-base-200 p-14">
            <FastRiderLogo></FastRiderLogo>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img
                        src={authImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;