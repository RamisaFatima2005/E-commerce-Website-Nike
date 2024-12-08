"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function DontMiss() {
  const route = useRouter()
  return (
    <div>
        <h1 className='text-[#111111] my-10 mx-6 font-semibold text-2xl'>Don't Miss</h1>
        <Image src='/DontMiss.svg' alt='DontMiss Picture' width={1400} height={1100} className='m-10'/>
        <div className='justify-center items-center text-center'>
            <h1 className='text-[#111111] text-4xl font-semibold'>FLIGHT ESSENTIALS</h1>
            <p className='mt-4'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
        </div>
        <div className='items-center justify-center text-center my-5 space-x-2'>
        <button onClick={()=>route.push("/products")} className='bg-[#111111] text-white rounded-full w-36 h-10'>Shop</button>
        </div>
    </div>
  )
}
