import React from "react";
import Image from "next/image";

export default function Essentials() {
  return (
    <div className="p-6">
      <h1 className="text-[#111111] my-10 font-semibold text-xl sm:text-2xl">
        The Essentials
      </h1>

      <div className="flex flex-wrap gap-4 justify-center">
        <Image
          src="/Essentials1.svg"
          alt="Essentials Picture"
          width={500}
          height={500}
          className="w-full max-w-sm sm:max-w-md h-auto"
        />
        <Image
          src="/Essentials2.svg"
          alt="Essentials Picture"
          width={500}
          height={500}
          className="w-full max-w-sm sm:max-w-md h-auto"
        />
        <Image
          src="/Essentials3.svg"
          alt="Essentials Picture"
          width={500}
          height={500}
          className="w-full max-w-sm sm:max-w-md h-auto"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center items-center text-center my-10">
        
        <div className="w-36">
          <h4 className="text-[#111111] font-semibold">Icons</h4>
          <ul className="mt-4 space-y-3">
            <li className="text-[#757575] font-medium">Air Force 1</li>
            <li className="text-[#757575] font-medium">Huarache</li>
            <li className="text-[#757575] font-medium">Air Max 90</li>
            <li className="text-[#757575] font-medium">Air Max 95</li>
          </ul>
        </div>

        <div className="w-52">
          <h4 className="text-[#111111] font-semibold">Shoes</h4>
          <ul className="mt-4 space-y-3">
            <li className="text-[#757575] font-medium">All Shoes</li>
            <li className="text-[#757575] font-medium">Customs Shoes</li>
            <li className="text-[#757575] font-medium">Jordan Shoes</li>
            <li className="text-[#757575] font-medium">Running Shoes</li>
          </ul>
        </div>

        <div className="w-52">
          <h4 className="text-[#111111] font-semibold">Clothing</h4>
          <ul className="mt-4 space-y-3">
            <li className="text-[#757575] font-medium">All Clothing</li>
            <li className="text-[#757575] font-medium">Modest Wear</li>
            <li className="text-[#757575] font-medium">Hoodies & Pullovers</li>
            <li className="text-[#757575] font-medium">Shirts & Tops</li>
          </ul>
        </div>

        <div className="w-52">
          <h4 className="text-[#111111] font-semibold">Kid&apos;s</h4>
          <ul className="mt-4 space-y-3">
            <li className="text-[#757575] font-medium">
              Infant & Toddler Shoes
            </li>
            <li className="text-[#757575] font-medium">Kid&apos;s Shoes</li>
            <li className="text-[#757575] font-medium">
              Kid&apos;s Jordan Shoes
            </li>
            <li className="text-[#757575] font-medium">
              Kid&apos;s Basketball Shoes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
