import React from "react";

const Signin = () => {
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
            Welcome back
          </h2>
          {/* <p className="max-w-sm text-sm mb-12 font-light text-gray-600">
            We're thrilled to have you join our Support Wizard community!
          </p> */}
          <label className="flex text-white py-3 ">Business email</label>
          <input
            type="text"
            className="w-full mb-4  p-3 border border-gary-300 rounded-md placeholder:font-light focus:outline-none"
            placeholder="name@work-email.com"
          />
          <label className="flex text-white py-3">Password</label>
          <input
            type="text"
            className="w-full mb-12   p-3 border border-gary-300 rounded-md placeholder:font-light focus:outline-none"
            placeholder="8 characters or more"
          />
          <button className="w-full p-3 text-white bg-horror rounded-full text-transform: capitalize hover:opacity-70 duration-200">
            Login
          </button>
        </div>
      </div>
    </main>
  );
};

export default Signin;
