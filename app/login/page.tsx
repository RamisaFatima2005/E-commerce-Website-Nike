import React from "react";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFFFFF]">
      <div className="w-full max-w-sm p-6 bg-[#FFFFFF]">
        <div className="text-center">
          <Image
            src="/Nikelogo.svg"
            alt="Nike Logo"
            width={50}
            height={50}
            className="mx-auto w-10 h-10"
          />
          <h1 className="text-2xl font-semibold mt-4">YOUR ACCOUNT</h1>
          <p className="text-gray-600 text-sm">FOR EVERYTHING NIKE</p>
        </div>

        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 focus:ring-black"
              />
              <span className="text-sm text-gray-600">Keep me signed in</span>
            </label>
            <a href="#" className="text-sm text-black underline">
              Forgotten your password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800"
          >
            SIGN IN
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          By logging in, you agree to Nike's{" "}
          <a href="#" className="text-black underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="text-black underline">
            Terms of Use
          </a>.
        </p>

        <p className="text-center text-sm text-gray-600 mt-4">
          Not a Member?{" "}
          <a href="/joinus" className="text-black underline">
            Join Us.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
