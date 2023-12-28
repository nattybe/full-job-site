'use client'
import React from "react";

const Signup = () => {
  return (
    <dialog open className="container mx-auto  p-8 bg-backround rounded border border-4 max-w-md shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-primary">Sign Up</h2>

      <form className="flex flex-col items-center" onSubmit={(e)=>{e.preventDefault()}}>
        <div className="mb-4 flex flex-col">
          <label htmlFor="username" className="text-sm text-text">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-input shadow-md focus:shadow-primary rounded"
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="text-sm text-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input shadow-md focus:shadow-primary rounded"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6 flex flex-col">
          <label htmlFor="password" className="text-sm text-text">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-input shadow-md focus:shadow-primary rounded"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-accent text-white py-2 rounded-md hover:bg-gray-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </dialog>
  );
};

export default Signup;
