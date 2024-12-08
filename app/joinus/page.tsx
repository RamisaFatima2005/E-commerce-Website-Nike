import Image from "next/image";
import React from "react";

const JoinUs = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FFFFFF]">
      <div className="w-full max-w-md p-6 bg-[#FFFFFF]">
        <div className="text-center">
          <Image
            src="/Nikelogo.svg"
            alt="Nike Logo"
            width={50}
            height={50}
            className="mx-auto w-10 h-10"
          />
          <h1 className="text-2xl font-semibold mt-4 text-[#111111]">BECOME A NIKE MEMBER</h1>
          <p className="text-[#8D8D8D] mt-2 text-sm">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration, and community.
          </p>
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
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          />
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          />
          <p className="text-[#8D8D8D]">Get a Nike Member Reward every year on your Birthday.</p>
          <select
            className="w-full px-4 py-2 text-[#8D8D8D] border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:outline-none"
          >
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Australia</option>
          </select>
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                className="mr-2 focus:ring-black"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                className="mr-2 focus:ring-black"
              />
              Female
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 focus:ring-black"
            />
            <span className="text-sm text-gray-600">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits.
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800"
          >
            JOIN US
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already a Member?{" "}
          <a href="/login" className="text-black underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
