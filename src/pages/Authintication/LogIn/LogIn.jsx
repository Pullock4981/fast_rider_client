// src/components/Auth/LogIn.jsx

import React from "react";
import { useForm } from "react-hook-form";

const LogIn = () => {
    // Initialize React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        console.log("Login Data:", data);
        // You can call your API or auth logic here
    };

    return (
        <section className="flex justify-center items-center bg-gray-100 px-4">
            <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Email Field */}
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Enter a valid email address",
                                },
                            })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
                        />
                        {errors.password && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </section>
    );
};

export default LogIn;
