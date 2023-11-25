"use client";
/* eslint-disable */
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";

const url = "https://chat-wizard.vercel.app/api/v1/users/";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (e) => {
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

      if (response.status === 201) {
        toast.success("Successfully signed up", {
          position: "top-right",
          autoClose: 3000,
          style: { background: "#7371D1", color: "white" },
        });
        localStorage.setItem("email", formData.email);
        router.push(`/dashboard/Chat?email=${formData.email}`);

        setFormData({ email: "", password: "" });
      } else {
        console.log(response.statusText);
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        toast.error(
          "Email address is already in use. Please use a different email."
        );
      } else {
        toast.error("An error occurred. Please try again later.");
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <main className="flex items-center justify-center bg-horror min-h-screen">
        <div className="flex flex-col m-6 space-y-10 bg-wizard md:bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
          <Image
            width={440}
            height={440}
            src="/images/sign.png"
            alt="image"
            className="w-[440px] hidden md:block"
          />
          <div className="p-6 md:p-12 bg-wizard rounded-r-2xl">
            <h2 className="mb-4 py-2 text-xl text-white font-bold">
              Welcome to SupportWizard
            </h2>
            <p className="max-w-sm text-sm mb-12 font-light text-gray-600">
              We're thrilled to have you join our Support Wizard community!
            </p>
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label htmlFor="email" className="flex text-white py-3">
                  Business email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-md placeholder:font-light focus:outline-none"
                  placeholder="name@work-email.com"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-12 relative">
                <label htmlFor="password" className="flex text-white py-3">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="w-full p-3 border border-gray-300 rounded-md placeholder:font-light focus:outline-none"
                    placeholder="8 characters or more"
                    required
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <span
                    className="cursor-pointer absolute top-0 right-0 mt-3 mr-3"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full p-3 text-white bg-horror rounded-full text-transform: capitalize hover:opacity-70 duration-200"
              >
                {isLoading ? "Creating account..." : "Create account"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
