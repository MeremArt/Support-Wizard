"use client";
import React, { useState } from "react";
import { signUp } from "../server/authentication/signUp";
/* eslint-disable */
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async () => {
    try {
      // Call the signUp function from your module
      await signUp(email, password);

      // Handle successful sign-up here, e.g., redirect to a dashboard or show a success message
      console.log("User signed up successfully!");
    } catch (error) {
      // Handle sign-up error here, e.g., display an error message
      console.error("Sign-up error:", error.message);
    }
  };
  return (
    <main className="flex items-center justify-center bg-horror min-h-screen  ">
      {/* card container  */}
      <div className="flex flex-col m-6 space-y-10 bg-wizard md:bg-white shadow-2xl  rounded-2xl md:flex-row md:space-y-0 md:m-0 ">
        {" "}
        {/* left side */}
        <img
          src="/images/sign.png"
          alt="image"
          className="w-[440px] hidden md:block"
        />
        {/* right side */}
        <div className="p-6 md:p-12  bg-wizard  rounded-r-2xl ">
          {/* Top content */}
          <h2 className="mb-4 py-2 text-xl text-white font-bold">
            {" "}
            Welcome to SupportWizard
          </h2>
          <p className="max-w-sm text-sm mb-12 font-light text-gray-600">
            We're thrilled to have you join our Support Wizard community!
          </p>
          <label className="flex text-white py-3 ">Business email</label>
          <input
            type="text"
            className="w-full mb-4  p-3 border border-gary-300 rounded-md placeholder:font-light focus:outline-none"
            placeholder="name@work-email.com"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label className="flex text-white py-3">Password</label>
          <input
            type="password"
            className="w-full mb-12   p-3 border border-gary-300 rounded-md placeholder:font-light focus:outline-none"
            placeholder="8 characters or more"
            value={password}
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={handleSignUp}
            className="w-full p-3 text-white bg-horror rounded-full text-transform: capitalize hover:opacity-70 duration-200"
          >
            Create Account
          </button>
        </div>
      </div>
    </main>
  );
};

export default Signup;
