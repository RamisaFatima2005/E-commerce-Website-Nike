// "use client"

// import React from 'react'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'


// export default function Navbar() {
//     const route= useRouter()
//   return (
//     <div>
//             <div>
//             <nav className='flex justify-between bg-[#F5F5F5] w-[#1440] h-[#60]'>
//                 <div className='flex mx-10'>
//                 <Image src="/navlogo.svg" alt='NavbarLogo' width={250} height={250}
//                 className='h-10 w-10'/>
//                 </div>
//                 <ul className='flex space-x-5 mx-10 my-2'>
//                     <button onClick={()=>route.push("/products")}><li className='text-[#111111]'>Find Store</li></button>
//                     <li className='text-[#111111]'>|</li>
//                     <button onClick={()=>route.push("/help")}><li className='text-[#111111]'> Help</li></button>
//                     <li className='text-[#111111]'>|</li>
//                     <button onClick={()=>route.push("/joinus")}><li className='text-[#111111]'>Join Us</li></button>
//                     <li className='text-[#111111]'>|</li>
//                     <button onClick={()=>route.push("/login")}><li className='text-[#111111]'>Sign In</li></button>
//                 </ul>
//                 </nav>
//                 </div>

//                 <nav className='flex justify-between bg-[#FFFFFF] w-[#1211] h-[#60]'>
//                 <div className='flex mx-5'>
//                 <Image src="/Nikelogo.svg" alt='NavbarLogo' width={100} height={100}
//                 className='h-[20] w-[30] my-2'/>
//                 </div>
//                 <ul className='flex space-x-5 mx-10 my-2'>
//                     <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'>New & Featured</li></button>
//                     <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'>Men</li></button>
//                     <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'>Women</li></button>
//                     <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'>Kids</li></button>
//                     <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'></li></button>
//                     <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'>Sale</li></button>
//                     <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'>SNKRS</li></button>
//                 </ul>

//                 <div className='flex my-2'>
//                     <input type="text"
//                            placeholder="Search"
//                            className="bg-[#F5F5F5] text-black rounded-full w-[180] h-[40]"/>

//                            <Image src="/hearticon.svg" alt='HeartIcon' height={40} width={40} className='h-[36] w-[36]'/>
//                            <button onClick={()=>route.push("/cart")}><Image src="/carticon.svg" alt='CartIcon' height={40} width={40} className='h-[36] w-[36]'/></button>
//                 </div>
//             </nav>
//                 </div>

        
//   )
// }

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const route = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">

      {/* Top Navbar */}
      <div className="w-full">
        <nav className="flex min-h-[60px] w-full items-center justify-between bg-[#F5F5F5] px-4 sm:px-6 lg:px-10">

          <div className="flex shrink-0">
  <button
    onClick={() => route.push("/")}
    className="cursor-pointer"
  >
    <Image
      src="/navlogo.svg"
      alt="NavbarLogo"
      width={250}
      height={250}
      className="h-10 w-10"
    />
  </button>
</div>

          {/* Desktop Top Links */}
          <ul className="hidden items-center space-x-3 sm:space-x-4 md:flex lg:space-x-5">
            <button onClick={() => route.push("/products")}>
              <li className="text-sm text-[#111111] sm:text-base">
                Find Store
              </li>
            </button>

            <li className="text-[#111111]">|</li>

            <button onClick={() => route.push("/help")}>
              <li className="text-sm text-[#111111] sm:text-base">
                Help
              </li>
            </button>

            <li className="text-[#111111]">|</li>

            <button onClick={() => route.push("/joinus")}>
              <li className="text-sm text-[#111111] sm:text-base">
                Join Us
              </li>
            </button>

            <li className="text-[#111111]">|</li>

            <button onClick={() => route.push("/login")}>
              <li className="text-sm text-[#111111] sm:text-base">
                Sign In
              </li>
            </button>
          </ul>

          {/* Mobile Top Links */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-[#111111]"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Top Menu */}
        {menuOpen && (
          <div className="border-t border-gray-200 bg-[#F5F5F5] px-5 py-4 md:hidden">
            <div className="flex flex-col gap-3">

              <button
                onClick={() => {
                  route.push("/products");
                  setMenuOpen(false);
                }}
                className="text-left text-[#111111]"
              >
                Find Store
              </button>

              <button
                onClick={() => {
                  route.push("/help");
                  setMenuOpen(false);
                }}
                className="text-left text-[#111111]"
              >
                Help
              </button>

              <button
                onClick={() => {
                  route.push("/joinus");
                  setMenuOpen(false);
                }}
                className="text-left text-[#111111]"
              >
                Join Us
              </button>

              <button
                onClick={() => {
                  route.push("/login");
                  setMenuOpen(false);
                }}
                className="text-left text-[#111111]"
              >
                Sign In
              </button>

            </div>
          </div>
        )}
      </div>


      {/* Main Navbar */}
      <nav className="flex min-h-[60px] w-full flex-col bg-[#FFFFFF] px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-5">

        {/* Nike Logo */}
        <div className="flex w-full items-center justify-between lg:w-auto">

          <div className="flex">
            <button
              onClick={() => route.push("/")}
              className="cursor-pointer"
            >
              <Image
                src="/Nikelogo.svg"
                alt="NavbarLogo"
                width={100}
                height={100}
                className="my-2 h-8 w-12 sm:h-9 sm:w-14 lg:h-10 lg:w-[60px]"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-xl text-[#111111] lg:hidden"
            aria-label="Toggle Navigation"
          >
            ☰
          </button>
        </div>


        {/* Desktop Main Navigation */}
        <ul className="hidden items-center space-x-4 lg:flex xl:space-x-5">

          <button onClick={() => route.push("/products")}>
            <li className="whitespace-nowrap text-[#111111]">
              New & Featured
            </li>
          </button>

          <button onClick={() => route.push("/products")}>
            <li className="text-[#111111]">
              Men
            </li>
          </button>

          <button onClick={() => route.push("/products")}>
            <li className="text-[#111111]">
              Women
            </li>
          </button>

          <button onClick={() => route.push("/products")}>
            <li className="text-[#111111]">
              Kids
            </li>
          </button>

          <button onClick={() => route.push("/products")}>
            <li className="text-[#111111]"></li>
          </button>

          <button onClick={() => route.push("/products")}>
            <li className="text-[#111111]">
              Sale
            </li>
          </button>

          <button onClick={() => route.push("/products")}>
            <li className="text-[#111111]">
              SNKRS
            </li>
          </button>

        </ul>


        {/* Search + Icons */}
        <div className="mt-2 flex w-full items-center justify-center gap-2 pb-3 sm:gap-3 lg:mt-0 lg:w-auto lg:pb-0">

          {/* <div className="relative flex-1 sm:flex-none">
            <input
              type="text"
              placeholder="Search"
              className="h-10 w-full rounded-full bg-[#F5F5F5] px-4 text-sm text-black outline-none sm:w-[180px]"
            />
          </div> */}

          {/* <Image
            src="/hearticon.svg"
            alt="HeartIcon"
            height={40}
            width={40}
            className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
          /> */}

          <button onClick={() => route.push("/cart")}>
            <Image
              src="/carticon.svg"
              alt="CartIcon"
              height={40}
              width={40}
              className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
            />
          </button>

        </div>


        {/* Mobile Main Navigation */}
        {menuOpen && (
          <div className="w-full border-t border-gray-200 py-4 lg:hidden">
            <ul className="flex flex-col items-center gap-4">

              <button onClick={() => route.push("/products")}>
                <li className="text-[#111111]">
                  New & Featured
                </li>
              </button>

              <button onClick={() => route.push("/products")}>
                <li className="text-[#111111]">
                  Men
                </li>
              </button>

              <button onClick={() => route.push("/products")}>
                <li className="text-[#111111]">
                  Women
                </li>
              </button>

              <button onClick={() => route.push("/products")}>
                <li className="text-[#111111]">
                  Kids
                </li>
              </button>

              <button onClick={() => route.push("/products")}>
                <li className="text-[#111111]"></li>
              </button>

              <button onClick={() => route.push("/products")}>
                <li className="text-[#111111]">
                  Sale
                </li>
              </button>

              <button onClick={() => route.push("/products")}>
                <li className="text-white">
                  SNKRS
                </li>
              </button>

            </ul>
          </div>
        )}

      </nav>

    </div>
  );
}