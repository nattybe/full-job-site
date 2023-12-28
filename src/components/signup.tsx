"use client";
import Link from "next/link";
import React, { DialogHTMLAttributes, useState } from "react";
import "./signup.css";
const Signup = () => {
  const [isSignUp, setSignUp] = useState(false);

  const signInHandler = () => {
    alert("signIn Handler");
  };
  const signUpHandler = () => {
    alert("signIn Handler");
  };
  const signUpComp = (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-6 text-primary">Sign Up</h2>
        <button
          className="self-start text-xl"
          onClick={() => {
            const dokuk: HTMLDialogElement =
              document.getElementById("signupDialog");
            dokuk.close();
          }}
        >
          ❌
        </button>
      </div>
      <form
        id="SignUpForm"
        className="flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          signUpHandler();
        }}
      >
        <div className="flex flex-row gap-4">
          <div className="mb-4 flex flex-col">
            <label htmlFor="username" className="text-sm text-text">
              First Name
            </label>
            <input
              autoFocus
              type="text"
              id="firstname"
              className="form-input w-full shadow-md focus:shadow-primary rounded"
              placeholder="Enter your First Name"
              required
            />
          </div>

          <div className="mb-4 flex width flex-col">
            <label htmlFor="username" className="text-sm text-text">
              Last Name
            </label>
            <input
              autoFocus
              type="text"
              id="lastname"
              className="shadow-md w-full focus:shadow-primary rounded"
              placeholder="Enter your Last Name"
              required
            />
          </div>
        </div>
        <div className="mb-4 w-full flex flex-col">
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
        <div className="mb-6 flex w-full flex-col">
          <label htmlFor="phone" className="text-sm text-text">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="form-input  shadow-md focus:shadow-primary rounded"
            placeholder="Enter your Phone"
            required
          />
        </div>
        <div className="mb-6 flex w-full flex-col">
          <label htmlFor="password" className="text-sm text-text">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-input  shadow-md focus:shadow-primary rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-6 flex w-full flex-col">
          <label htmlFor="passwordConfirm" className="text-sm text-text">
            Confirm Password
          </label>
          <input
            type="password"
            id="passwordConfirm"
            className="form-input  shadow-md focus:shadow-primary rounded"
            placeholder="Confirm Password"
            required
          />
        </div>
        <span
          onClick={() => setSignUp(false)}
          style={{ cursor: "pointer" }}
          className="text-secondary py-2 hover:text-primary underline transition duration-300"
        >
          Already have an ancount
        </span>
        <button
          type="submit"
          className="w-full bg-accent text-white py-2 rounded-md hover:bg-gray-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </>
  );
  const signInComp = (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-6 text-primary">Sign In</h2>
        <button
          className="self-start text-xl"
          onClick={() => {
            const diag: HTMLDialogElement =
              document.getElementById("signupDialog");
            diag.close();
          }}
        >
          ❌
        </button>
      </div>
      <form
        id="LoginForm"
        className="flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          signInHandler();
        }}
      >
        <div className="mb-4 w-full flex flex-col">
          <label htmlFor="username" className="text-sm text-text">
            Email
          </label>
          <input
            autoFocus
            type="text"
            id="Email"
            className="form-input shadow-md focus:shadow-primary rounded"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-6 w-full flex flex-col">
          <label htmlFor="LoginPassword" className="text-sm text-text">
            Password
          </label>
          <input
            type="password"
            id="LoginPassword"
            className="form-input shadow-md focus:shadow-primary rounded"
            placeholder="Enter your password"
            required
          />
        </div>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => setSignUp(true)}
          className="text-secondary py-2 hover:text-primary underline transition duration-300"
        >
          Sign Up
        </span>
        <button
          type="submit"
          className="w-full bg-accent text-white py-2 rounded-md hover:bg-gray-700 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </>
  );
  return (
    <dialog
      id="signupDialog"
      className="container mx-auto p-8 bg-background rounded max-w-md shadow-md"
    >
      {isSignUp ? signUpComp : signInComp}
    </dialog>
  );
};

export default Signup;
