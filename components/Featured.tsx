"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Featured() {
  const route = useRouter();
  return (
    <div className="p-6 sm:p-10">
      <h1 className="text-[#111111] my-10 mx-6 font-semibold text-xl sm:text-2xl lg:text-3xl">
        Featured
      </h1>

      <div className="flex justify-center mx-auto">
        <Image
          src="/Featured.svg"
          alt="Featured Picture"
          width={1400}
          height={1100}
          className="w-full max-w-screen-lg h-auto mx-auto"
        />
      </div>

      <div className="text-center my-10">
        <h1 className="text-[#111111] font-semibold text-xl sm:text-2xl lg:text-3xl">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-[#111111] font-normal text-sm sm:text-base lg:text-lg mt-4">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
      </div>

      <div className="flex justify-center my-6">
        <button
          className="bg-[#111111] text-white rounded-full px-6 py-2 sm:px-8 sm:py-3 lg:px-10 lg:py-4 text-sm sm:text-base lg:text-lg"
          onClick={() => route.push('/products')}
        >
          Find Your Shop
        </button>
      </div>
    </div>
  );
}
