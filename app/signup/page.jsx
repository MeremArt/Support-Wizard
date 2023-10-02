"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signUp } from "../server/authentication/signUp";
import Image from "next/image";
const Signup = () => {
  // Define state variables to store input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Call the signUp function with email and password
    try {
      const response = await signUp(email, password);
      // Handle the response, e.g., show success message or redirect to another page
      console.log("Signup success:", response);
    } catch (error) {
      // Handle any errors, e.g., show an error message
      console.error("Signup error:", error);
    }
  };

  return (
    <main className="flex items-center justify-center bg-horror min-h-screen">
      {/* card container */}
      <div className="flex flex-col m-6 space-y-10 bg-wizard md:bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0 ">
        {/* left side */}
        <Image
          src="/images/sign.png"
          alt="image"
          className="w-[440px] hidden md:block"
        />
        {/* right side */}
        <div className="p-6 md:p-12  bg-wizard  rounded-r-2xl ">
          {/* Top content */}
          <h2 className="mb-4 py-2 text-xl text-white font-bold">
            Welcome to SupportWizard
          </h2>
          <p className="max-w-sm text-sm mb-12 font-light text-gray-600">
            We're thrilled to have you join our Support Wizard community!
          </p>
          {/* Signup form */}
          <form onSubmit={handleSignup}>
            <label className="flex text-white py-3">Business email</label>
            <input
              type="text"
              className="w-full mb-4  p-3 border border-gary-300 rounded-md placeholder:font-light focus:outline-none"
              placeholder="name@work-email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="flex text-white py-3">Password</label>
            <input
              type="password"
              className="w-full mb-12   p-3 border border-gary-300 rounded-md placeholder:font-light focus:outline-none"
              placeholder="8 characters or more"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit" // Use type="submit" to trigger form submission
              className="w-full p-3 text-white bg-horror rounded-full text-transform: capitalize hover:opacity-70 duration-200"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Signup;
