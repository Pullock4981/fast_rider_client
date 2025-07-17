// src/components/Features/FeatureTimeline.jsx

import React from "react";

import imgTracking from "../../../assets/live-tracking.png";
import imgSafe from "../../../assets/safe-delivery.png";

const FeatureTimeline = () => {
    const features = [
        {
            idx: 1,
            heading: "Live Parcel Tracking",
            description:
                "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
            image: imgTracking,
        },
        {
            idx: 2,
            heading: "100% Safe Delivery",
            description:
                "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            image: imgSafe,
        },
        {
            idx: 3,
            heading: "24/7 Call Center Support",
            description:
                "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
            image: imgSafe,
        },
    ];

    return (
        <section className="bg-base-100 py-16 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Choose FastRider
                </h2>

                <div className="flex flex-col gap-8">
                    {features.map((item, index) => (
                        <div
                            key={item.idx}
                            className="flex border rounded-xl p-6 shadow-sm bg-white items-center"
                        >
                            {/* Left Side: Image */}
                            <div className="flex-shrink-0 w-20 h-20">
                                <img
                                    src={item.image}
                                    alt={item.heading}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Divider */}
                            <div className="border-l border-gray-300 h-20 mx-6"></div>

                            {/* Text Section */}
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2">{item.heading}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureTimeline;
