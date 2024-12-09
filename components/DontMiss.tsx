"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function DontMiss() {
  const route = useRouter();
  return (
    <div className="p-6">
      <h1 className="text-[#111111] my-10 font-semibold text-xl sm:text-2xl">
        Don&apos;t Miss
      </h1>

      <div className="flex justify-center">
        <Image
          src="/DontMiss.svg"
          alt="DontMiss Picture"
          width={1400}
          height={1100}
          className="w-full max-w-4xl h-auto"
        />
      </div>

      <div className="flex flex-col justify-center items-center text-center mt-10">
        <h1 className="text-[#111111] text-2xl sm:text-4xl font-semibold">
          FLIGHT ESSENTIALS
        </h1>
        <p className="mt-4 text-sm sm:text-base">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>
      </div>

      <div className="flex justify-center mt-5">
        <button
          onClick={() => route.push("/products")}
          className="bg-[#111111] text-white rounded-full w-32 sm:w-36 h-10 text-sm sm:text-base"
        >
          Shop
        </button>
      </div>
    </div>
  );
}
