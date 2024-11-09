import React from 'react';
import Navbar from './Navbar';
const LoginContainer = () => {
  return (

    <>
    
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-[1000px] h-[450px]"> {/* Set the width and height */}
        {/* Left Side: Logo and Caption */}
        <div className="flex flex-col justify-center items-center p-8 w-1/2 bg-yellow-400">
          <div className="text-[48px] font-bold">
            <a href="/" className="font-permanent-marker flex">
              <span className="text-[#4E2525]">Urban</span>
              <span className="text-red-600">Cove</span>
            </a>
          </div>
          <p className="mt-4 text-lg text-gray-600 text-center">Find Your Perfect Fit. Log in to explore the latest casual styles.</p>
        </div>

        {/* Right Side: Sign Up Form */}
        <div className="p-8 w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-800 py-2 rounded-md hover:bg-yellow-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginContainer;
