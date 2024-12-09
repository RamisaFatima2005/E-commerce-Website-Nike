import Image from 'next/image';
import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="flex flex-col items-center justify-center text-center p-6 sm:p-10">
        <h1 className="font-semibold text-[#111111] text-lg sm:text-xl md:text-2xl">
          Hello Nike App
        </h1>
        <p className="text-[#111111] text-sm sm:text-base md:text-lg">
          Download the app to access everything Nike.{' '}
          <button>
            <b>
              <u>Get Your Great</u>
            </b>
          </button>
        </p>
      </div>

      <div className="flex justify-center mx-auto">
        <Image
          src="/HomePage.svg"
          alt="LandingpagePicture"
          width={1400}
          height={1100}
          className="w-full max-w-screen-lg h-auto mx-auto"
        />
      </div>

      <div className="text-center px-6 sm:px-10 my-10">
        <h2 className="font-medium text-sm sm:text-base md:text-lg">First Look</h2>
        <h1 className="font-semibold text-2xl sm:text-4xl md:text-5xl">
          NIKE AIR MAX PULSE
        </h1>
        <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse
          <br />
          —designed to push you past your limits and help you go to the max.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 my-3">
        <button className="bg-[#111111] text-white rounded-full w-24 h-10 sm:w-28 sm:h-12">
          Notify Me
        </button>
        <button className="bg-[#111111] text-white rounded-full w-36 h-10 sm:w-40 sm:h-12">
          Shop Air Max
        </button>
      </div>
    </div>
  );
}
