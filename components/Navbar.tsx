"use client"

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export default function Navbar() {
    const route= useRouter()
  return (
    <div>
            <div>
            <nav className='flex justify-between bg-[#F5F5F5] w-[#1440] h-[#60]'>
                <div className='flex mx-10'>
                <Image src="/navlogo.svg" alt='NavbarLogo' width={250} height={250}
                className='h-10 w-10'/>
                </div>
                <ul className='flex space-x-5 mx-10 my-2'>
                    <button onClick={()=>route.push("/products")}><li className='text-[#111111]'>Find Store</li></button>
                    <li className='text-[#111111]'>|</li>
                    <button onClick={()=>route.push("/help")}><li className='text-[#111111]'> Help</li></button>
                    <li className='text-[#111111]'>|</li>
                    <button onClick={()=>route.push("/joinus")}><li className='text-[#111111]'>Join Us</li></button>
                    <li className='text-[#111111]'>|</li>
                    <button onClick={()=>route.push("/login")}><li className='text-[#111111]'>Sign In</li></button>
                </ul>
                </nav>
                </div>

                <nav className='flex justify-between bg-[#FFFFFF] w-[#1211] h-[#60]'>
                <div className='flex mx-5'>
                <Image src="/Nikelogo.svg" alt='NavbarLogo' width={100} height={100}
                className='h-[20] w-[30] my-2'/>
                </div>
                <ul className='flex space-x-5 mx-10 my-2'>
                    <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'>New & Featured</li></button>
                    <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'>Men</li></button>
                    <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'>Women</li></button>
                    <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'>Kids</li></button>
                    <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'></li></button>
                    <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'>Sale</li></button>
                    <button  onClick={()=>route.push("/products")}><li className='text-[#111111]'>SNKRS</li></button>
                </ul>

                <div className='flex my-2'>
                    <input type="text"
                           placeholder="Search"
                           className="bg-[#F5F5F5] text-black rounded-full w-[180] h-[40]"/>

                           <Image src="/hearticon.svg" alt='HeartIcon' height={40} width={40} className='h-[36] w-[36]'/>
                           <button onClick={()=>route.push("/cart")}><Image src="/carticon.svg" alt='CartIcon' height={40} width={40} className='h-[36] w-[36]'/></button>
                </div>
            </nav>
                </div>

        
  )
}
