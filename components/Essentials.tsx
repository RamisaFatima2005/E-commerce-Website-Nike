import React from 'react'
import Image from 'next/image'

export default function Essentials() {
  return (
    <div>
        <h1 className='text-[#111111] my-10 mx-6 font-semibold text-2xl'>The Essentials</h1>
        <div className='flex space-x-4'>
            <Image src="/Essentials1.svg" alt='Essentials Picture' width={500} height={500}
            className='w-[440] h-[540]'/>
            <Image src="/Essentials2.svg" alt='Essentials Picture' width={500} height={500}
            className='w-[440] h-[540]'/>
            <Image src="/Essentials3.svg" alt='Essentials Picture' width={500} height={500}
            className='w-[440] h-[540]'/>
            </div>

            <div className='flex justify-center items-center text-center my-20'>
                <div className='w-36'>
                    <ul>
                        <h4 className='text-[#111111] font-semibold'>Icons</h4>
                        <br/>
                        <br/>
                        <li className='text-[#757575] font-medium'>Air Force 1</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Huarache</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Air Max 90</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Air Max 95</li>
                    </ul>
                </div>


                <div className='w-52'>
                    <ul>
                        <h4 className='text-[#111111] font-semibold'>Shoes</h4>
                        <br/>
                        <br/>
                        <li className='text-[#757575] font-medium'>All Shoes</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Customs Shoes</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Jordan Shoes</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Running Shoes</li>
                    </ul>
                </div>


                <div className='w-52'>
                    <ul>
                        <h4 className='text-[#111111] font-semibold'>Clothing</h4>
                        <br/>
                        <br/>
                        <li className='text-[#757575] font-medium'>All Clothing</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Modest Wear</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Hoodies & Pullovers</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Shirts & Tops</li>
                    </ul>
                </div>


                <div className='w-52'>
                    <ul>
                        <h4 className='text-[#111111] font-semibold'>Kid&apos;s</h4>
                        <br/>
                        <br/>
                        <li className='text-[#757575] font-medium'>Infant & Toddler Shoes</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Kid&apos;s Shoes</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Kid&apos;s Jordan Shoes</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Kid&apos;s Basketball Shoes</li>
                    </ul>
                </div>
            </div>
    </div>
  )
}
