"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Image from "next/image";

const url = "https://chat-wizard.onrender.com/api/v1/users/login";

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Successful login, redirect to the dashboard
        router.push("/dashboard");
      } else {
        console.log(response.statusText);
        console.log(response.data); // Log the response data for debugging
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log("Validation error:", error.response.data); // Log server validation errors
      } else {
        console.error("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <main className="flex items-center justify-center bg-horror min-h-screen">
        {/* card container */}
        <div className="flex flex-col m-6 space-y-10 bg-wizard md:bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
          {/* left side */}
          <Image
            width={440}
            height={440}
            src="/images/sign.png"
            alt="image"
            className="w-[440px] hidden md:block"
          />
          {/* right side */}
          <div className="p-6 md:p-12 bg-wizard rounded-r-2xl">
            {/* Top content */}
            <h2 className="mb-4 py-2 text-xl text-white font-bold">
              Welcome back
            </h2>
            <form onSubmit={handleLogin}>
              <label className="flex text-white py-3">Business email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mb-4 p-3 border border-gray-300 rounded-md placeholder:font-light focus:outline-none"
                placeholder="name@work-email.com"
                required
              />
              <label className="flex text-white py-3">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full mb-12 p-3 border border-gray-300 rounded-md placeholder:font-light focus:outline-none"
                placeholder="8 characters or more"
                autoComplete="current-password"
                required
              />
              <button
                type="submit"
                className="w-full p-3 text-white bg-horror rounded-full text-transform: capitalize hover:opacity-70 duration-200"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : " Login"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signin;
