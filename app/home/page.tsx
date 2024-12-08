import Image from 'next/image'
import React from 'react'

export default function HomePage() {
  return (
    <div>
        <div className='bg-[#F5F5F5] items-center justify-center text-center'>
            <h1 className='font-semibold text-[#111111]'>Hello Nike App</h1>
            <p className='text-[#111111]'>Download the app to access everything Nike. <button><b><u>Get Your Great</u></b></button></p>
        </div>
        <div>
        <Image src='/HomePage.svg' alt='LandingpagePicture' width={1400} height={1100}
        className='h-[700] w-[1344] mx-10'/>
        </div>
        <div className='items-center justify-center text-center my-10'>
            <h2 className='font-medium'>First Look</h2>
            <h1 className='font-semibold text-5xl'>NIKE AIR MAX PULSE</h1>
            <p className='font-normal'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                <br/>
            —designed to push you past your limits and help you go to the max.</p>
        </div>
        <div className='items-center justify-center text-center my-3 space-x-2'>
            <button className='bg-[#111111] text-white rounded-full w-24 h-10'>Notify Me</button>
            <button className='bg-[#111111] text-white rounded-full w-36 h-10'>Shop Air Mask</button>
        </div>
    </div>
  )
}
