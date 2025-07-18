import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// Mock district data (replace with your full 64 districts data)
const districts = [
    { id: 1, name: "Dhaka", serviceCenters: ["DC1", "DC2", "DC3"] },
    { id: 2, name: "Chattogram", serviceCenters: ["CC1", "CC2"] },
    { id: 3, name: "Sylhet", serviceCenters: ["SC1"] },
    // add all 64 districts here with their service centers
];

const MySwal = withReactContent(Swal);

const SendParcel = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
    } = useForm({
        defaultValues: {
            parcelType: "document",
            senderName: "Pre-filled Sender Name",
        },
    });

    const parcelType = watch("parcelType");
    const senderRegion = watch("senderRegion");
    const receiverRegion = watch("receiverRegion");

    const [senderServiceCenters, setSenderServiceCenters] = useState([]);
    const [receiverServiceCenters, setReceiverServiceCenters] = useState([]);

    // Update sender service centers when senderRegion changes
    useEffect(() => {
        const district = districts.find((d) => d.name === senderRegion);
        setSenderServiceCenters(district ? district.serviceCenters : []);
        setValue("senderServiceCenter", "");
    }, [senderRegion, setValue]);

    // Update receiver service centers when receiverRegion changes
    useEffect(() => {
        const district = districts.find((d) => d.name === receiverRegion);
        setReceiverServiceCenters(district ? district.serviceCenters : []);
        setValue("receiverServiceCenter", "");
    }, [receiverRegion, setValue]);

    const onSubmit = (data) => {
        let cost = 0;
        if (data.parcelType === "document") cost = 50;
        else cost = data.weight ? data.weight * 10 : 100;

        MySwal.fire({
            title: "Confirm Delivery Cost",
            html: (
                <div>
                    <p>
                        Estimated Delivery Cost: <strong>{cost} BDT</strong>
                    </p>
                    <p>Do you want to confirm and save the parcel info?</p>
                </div>
            ),
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Confirm",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                // Replace with DB saving logic
                console.log("Saved parcel data:", data);
                MySwal.fire("Saved!", "Parcel info saved successfully!", "success");
            }
        });
    };

    return (
        <div className="max-w-5xl mx-auto p-3 m-7 bg-white shadow rounded">
            <h1 className="text-3xl font-bold mb-2">Send a Parcel</h1>
            <p className="mb-6 text-gray-600">
                Fill in the details below to schedule your parcel pickup and delivery.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Parcel Info */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Parcel Info</h2>
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                        <div className="flex items-center gap-4 col-span-1">
                            <label className="font-medium">Type *</label>
                            <label className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    value="document"
                                    {...register("parcelType", { required: true })}
                                    defaultChecked
                                />
                                Document
                            </label>
                            <label className="flex items-center gap-1">
                                <input
                                    type="radio"
                                    value="non-document"
                                    {...register("parcelType", { required: true })}
                                />
                                Non-document
                            </label>
                        </div>

                        <div className="col-span-2">
                            <label className="block font-medium mb-1">Title *</label>
                            <input
                                type="text"
                                {...register("title", { required: true })}
                                className={`w-full border rounded px-3 py-2 ${errors.title ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.title && (
                                <p className="text-red-500 text-sm">Title is required</p>
                            )}
                        </div>

                        {parcelType === "non-document" && (
                            <div className="col-span-3">
                                <label className="block font-medium mb-1">Weight (kg)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    {...register("weight", {
                                        valueAsNumber: true,
                                        validate: (val) =>
                                            val === undefined || val >= 0 || "Weight must be positive",
                                    })}
                                    className={`w-full border rounded px-3 py-2 ${errors.weight ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.weight && (
                                    <p className="text-red-500 text-sm">{errors.weight.message}</p>
                                )}
                            </div>
                        )}
                    </div>
                </section>

                <div className="flex md:flex-row flex-col gap-4 justify-between">
                    {/* Sender Info */}
                    <section className="border border-gray-300 rounded p-4 mb-6">
                        <h2 className="text-xl font-semibold mb-4">Sender Info</h2>

                        {/* Name & Contact row */}
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block font-medium mb-1">Name *</label>
                                <input
                                    type="text"
                                    {...register("senderName", { required: true })}
                                    className={`w-full border rounded px-3 py-2 ${errors.senderName ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.senderName && (
                                    <p className="text-red-500 text-sm">Name is required</p>
                                )}
                            </div>

                            <div>
                                <label className="block font-medium mb-1">Contact *</label>
                                <input
                                    type="tel"
                                    {...register("senderContact", { required: true })}
                                    className={`w-full border rounded px-3 py-2 ${errors.senderContact ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.senderContact && (
                                    <p className="text-red-500 text-sm">Contact is required</p>
                                )}
                            </div>
                        </div>

                        {/* Select Region & Service Center row */}
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block font-medium mb-1">Select Region *</label>
                                <select
                                    {...register("senderRegion", { required: true })}
                                    className={`w-full border rounded px-3 py-2 ${errors.senderRegion ? "border-red-500" : ""
                                        }`}
                                >
                                    <option value="">Select Region</option>
                                    {districts.map((d) => (
                                        <option key={d.id} value={d.name}>
                                            {d.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.senderRegion && (
                                    <p className="text-red-500 text-sm">Region is required</p>
                                )}
                            </div>

                            <div>
                                <label className="block font-medium mb-1">Select Service Center *</label>
                                <select
                                    {...register("senderServiceCenter", { required: true })}
                                    className={`w-full border rounded px-3 py-2 ${errors.senderServiceCenter ? "border-red-500" : ""
                                        }`}
                                    disabled={!senderServiceCenters.length}
                                >
                                    <option value="">Select Service Center</option>
                                    {senderServiceCenters.map((sc, i) => (
                                        <option key={i} value={sc}>
                                            {sc}
                                        </option>
                                    ))}
                                </select>
                                {errors.senderServiceCenter && (
                                    <p className="text-red-500 text-sm">Service Center is required</p>
                                )}
                            </div>
                        </div>

                        {/* Address & Pick up Instruction row */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-medium mb-1">Address *</label>
                                <textarea
                                    {...register("senderAddress", { required: true })}
                                    className={`w-full border rounded px-3 py-2 ${errors.senderAddress ? "border-red-500" : ""
                                        }`}
                                    rows={2}
                                />
                                {errors.senderAddress && (
                                    <p className="text-red-500 text-sm">Address is required</p>
                                )}
                            </div>

                            <div>
                                <label className="block font-medium mb-1">Pick up Instruction *</label>
                                <textarea
                                    {...register("senderPickupInstruction", { required: true })}
                                    className={`w-full border rounded px-3 py-2 ${errors.senderPickupInstruction ? "border-red-500" : ""
                                        }`}
                                    rows={2}
                                />
                                {errors.senderPickupInstruction && (
                                    <p className="text-red-500 text-sm">Pick up Instruction is required</p>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Receiver Info */}
                    <section className="border border-gray-300 rounded p-4 mb-6">
                        <h2 className="text-xl font-semibold mb-4">Receiver Info</h2>

                        {/* Name & Contact */}
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block font-medium mb-1">Name *</label>
                                <input
                                    type="text"
                                    {...register("receiverName", { required: true })}
                                    className={`w-full border rounded px-3 py-2 ${errors.receiverName ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.receiverName && (
                                    <p className="text-red-500 text-sm">Name is required</p>
                                )}
                            </div>

                            <div>
                                <label className="block font-medium mb-1">Contact *</label>
                                <input
                                    type="tel"
                                    {...register("receiverContact", { required: true })}
                                    className={`w-full border rounded px-3 py-2 ${errors.receiverContact ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.receiverContact && (
                                    <p className="text-red-500 text-sm">Contact is required</p>
                                )}
                            </div>
                        </div>

                        {/* Select Region & Service Center */}
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block font-medium mb-1">Select Region *</label>
                                <select
                                    {...register("receiverRegion", { required: true })}
                                    className={`w-full border rounded px-3 py-2 ${errors.receiverRegion ? "border-red-500" : ""
                                        }`}
                                >
                                    <option value="">Select Region</option>
                                    {districts.map((d) => (
                                        <option key={d.id} value={d.name}>
                                            {d.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.receiverRegion && (
                                    <p className="text-red-500 text-sm">Region is required</p>
                                )}
                            </div>

                            <div>
                                <label className="block font-medium mb-1">Select Service Center *</label>
                                <select
                                    {...register("receiverServiceCenter", { required: true })}
                                    className={`w-full border rounded px-3 py-2 ${errors.receiverServiceCenter ? "border-red-500" : ""
                                        }`}
                                    disabled={!receiverServiceCenters.length}
                                >
                                    <option value="">Select Service Center</option>
                                    {receiverServiceCenters.map((sc, i) => (
                                        <option key={i} value={sc}>
                                            {sc}
                                        </option>
                                    ))}
                                </select>
                                {errors.receiverServiceCenter && (
                                    <p className="text-red-500 text-sm">Service Center is required</p>
                                )}
                            </div>
                        </div>

                        {/* Address & Delivery Instruction */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-medium mb-1">Address *</label>
                                <textarea
                                    {...register("receiverAddress", { required: true })}
                                    className={`w-full border rounded px-3 py-2 ${errors.receiverAddress ? "border-red-500" : ""
                                        }`}
                                    rows={2}
                                />
                                {errors.receiverAddress && (
                                    <p className="text-red-500 text-sm">Address is required</p>
                                )}
                            </div>

                            <div>
                                <label className="block font-medium mb-1">Delivery Instruction *</label>
                                <textarea
                                    {...register("receiverDeliveryInstruction", { required: true })}
                                    className={`w-full border rounded px-3 py-2 ${errors.receiverDeliveryInstruction ? "border-red-500" : ""
                                        }`}
                                    rows={2}
                                />
                                {errors.receiverDeliveryInstruction && (
                                    <p className="text-red-500 text-sm">Delivery Instruction is required</p>
                                )}
                            </div>
                        </div>
                    </section>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
                    >
                        Send Parcel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SendParcel;
