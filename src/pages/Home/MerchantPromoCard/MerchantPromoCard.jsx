// src/components/MerchantPromoCard/MerchantPromoCard.jsx

import React from "react";
import promoImg from "../../../assets/location-merchant.png"; // Replace with your actual image path

const MerchantPromoCard = () => {
    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="bg-[#03373D] rounded-3xl border border-gray-600 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-lg text-white">
                    {/* Left Side Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">
                            Merchant and Customer Satisfaction is Our First Priority
                        </h2>
                        <p className="mb-6 text-gray-200">
                            We offer the lowest delivery charge with the highest value along
                            with 100% safety of your product. Pathao courier delivers your
                            parcels in every corner of Bangladesh right on time.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <button className="bg-[#CAEB66] text-black font-semibold px-6 py-2 rounded-md hover:opacity-90 transition">
                                Become a Merchant
                            </button>
                            <button className="border border-white text-white font-semibold px-6 py-2 rounded-md hover:bg-white hover:text-[#03373D] transition">
                                Earn with Profast Courier
                            </button>
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <div className="flex-1">
                        <img
                            src={promoImg}
                            alt="Merchant Banner"
                            className="w-full max-w-md mx-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MerchantPromoCard;
