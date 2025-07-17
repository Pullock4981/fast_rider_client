// src/components/Services/OurServices.jsx

import React from "react";
import {
    FaTruckMoving,
    FaGlobeAmericas,
    FaWarehouse,
    FaMoneyBillWave,
    FaBuilding,
    FaUndoAlt,
} from "react-icons/fa";

const servicesData = [
    {
        icon: <FaTruckMoving className="text-4xl text-primary mx-auto mb-4" />,
        title: "Express & Standard Delivery",
        description:
            "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
        icon: <FaGlobeAmericas className="text-4xl text-primary mx-auto mb-4" />,
        title: "Nationwide Delivery",
        description:
            "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
        icon: <FaWarehouse className="text-4xl text-primary mx-auto mb-4" />,
        title: "Fulfillment Solution",
        description:
            "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
        icon: <FaMoneyBillWave className="text-4xl text-primary mx-auto mb-4" />,
        title: "Cash on Home Delivery",
        description:
            "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
        icon: <FaBuilding className="text-4xl text-primary mx-auto mb-4" />,
        title: "Corporate Service / Contract In Logistics",
        description:
            "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
        icon: <FaUndoAlt className="text-4xl text-primary mx-auto mb-4" />,
        title: "Parcel Return",
        description:
            "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
];

const OurServices = () => {
    return (
        <section className="py-16 px-4 rounded-3xl mt-10" style={{ backgroundColor: "#03373D" }}>
            <div className="max-w-7xl mx-auto text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                <p className="max-w-2xl mx-auto mb-12">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white text-center rounded-xl p-6 shadow-md transition cursor-pointer duration-300 hover:shadow-xl hover:bg-[#CAEB66]"
                        >
                            {service.icon}
                            <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                            <p className="text-sm text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
