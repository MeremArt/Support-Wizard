"use client";
/* eslint-disable */
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";
import dashboard from "../dashboard/page";

const url = "https://chat-wizard.vercel.app/api/v1/users/login/";

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [enteredEmail, setEnteredEmail] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "email") {
      setEnteredEmail(value); // Update the entered email
    }
    console.log(enteredEmail);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Successful login, redirect to the dashboard
        toast.success("Successfully signed up", {
          position: "top-right",
          autoClose: 3000,
          style: { background: "#7371D1", color: "white" },
        });
        // Set the email in local storage
        localStorage.setItem("email", formData.email);
        router.push(`/dashboard/Chat?email=${formData.email}`);

        setFormData({ email: "", password: "" });
      } else {
        console.log(response.statusText);
        console.log(response.data); // Log the response data for debugging
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Server error");
        console.log("Validation error:", error.response.data); // Log server validation errors
      } else {
        toast.error("An error occurred. Please try again later.");
        console.error("An error occurred. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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
              Welcome back 🧙‍♂️
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
                {isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  " Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signin;
