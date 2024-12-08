"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Featured() {
  const route=useRouter()
  return (
    <div>
        <h1 className='text-[#111111] my-10 mx-6 font-semibold text-2xl'>Featured</h1>
        <Image src="/Featured.svg" alt='Featured Picture' width={1400} height={1100} className='m-10'/>
        <h1 className='text-[#111111] text-3xl text-center font-semibold'>STEP INTO WHAT FEELS GOOD</h1>
        <p className='text-[#111111] text-center font-normal'>Cause everyone should know the feeling of running in that perfect pair.</p>
        <div className='items-center justify-center text-center my-3 space-x-2'>
        <button className='bg-[#111111] text-white rounded-full w-36 h-10' onClick={()=>route.push("/products")}>Find Your Shop</button>
        </div>
    </div>
  )
}
