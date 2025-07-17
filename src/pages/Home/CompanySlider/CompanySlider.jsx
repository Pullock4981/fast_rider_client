// src/components/CompanySlider/CompanySlider.jsx

import React from "react";
import Marquee from "react-fast-marquee";

import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const CompanySlider = () => {
    return (
        <section className="py-16 bg-white text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">
                    We've helped thousands of sales teams
                </h2>

                <Marquee pauseOnHover={true} speed={50} gradient={false}>
                    {logos.map((logo, index) => (
                        <div key={index} className="mx-8">
                            <img src={logo} alt={`Company ${index + 1}`} className="h-6 object-contain" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default CompanySlider;
