import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='bg-[#111111]'>
        <div className='flex pt-20'>
                        <h4 className='text-[#FFFFFF] font-medium ml-10'>Find A STORE</h4>
                        <br/>
                        <h4 className='text-[#FFFFFF] font-medium ml-32'>GET HELP</h4>
                        <br/>
                        <h4 className='text-[#FFFFFF] font-medium ml-32'>ABOUT NIKE</h4>
                        <br/>
                        <h4 className='text-[#FFFFFF] font-medium ml-44'>Kid's</h4>
                        <br/>

                        <div className=' flex ml-72 space-x-5'>
                        <Image src='/twitter.svg' alt='Twitter' width={50} height={50}/>
                        <Image src='/fb.svg' alt='Facebook' width={50} height={50}/>
                        <Image src='/youtube.svg' alt='Youtube' width={50} height={50}/>
                        <Image src='/instagram.svg' alt='Instagram' width={50} height={50}/>
                        </div>
                        </div>
        <div className='flex'>
                <div className='w-56 mt-10 ml-10'>
                    <ul>
                        <li className='text-[#FFFFFF] font-medium'>BECOME A MEMBER</li>
                        <br/>
                        <li className='text-[#FFFFFF] font-medium'>SIGN UP FOR EMAIL</li>
                        <br/>
                        <li className='text-[#FFFFFF] font-medium'>SEND US FEEDBACK</li>
                        <br/>
                        <li className='text-[#FFFFFF] font-medium'>STUDENT DISCOUNTS</li>
                    </ul>
                </div>


                <div className='w-64 mt-10'>
                    <ul>
                        <li className='text-[#757575] font-medium'>Order Status</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Delivery</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Returns</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Payment Options</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Contact Us On Nike.com Inquiries</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Contact Us On All Other Inquiries</li>
                    </ul>
                </div>


                <div className='w-28 mt-10'>
                    <ul>
                        <li className='text-[#757575] font-medium'>News</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Careers</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Investors</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Sustainability</li>
                    </ul>
                </div>


                <div className='w-52 mt-10 ml-32'>
                    <ul>
                        <li className='text-[#757575] font-medium'>Infant & Toddler Shoes</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Kids' Shoes</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Kids' Jordan Shoes</li>
                        <br/>
                        <li className='text-[#757575] font-medium'>Kids' Basketball Shoes</li>
                    </ul>
                </div>
                </div>

                <div className='flex justify-between'>
                <div className='flex justify-start items-start text-start mt-10'>
                    <Image src="/location.svg" alt='Location Icon' width={50} height={50} className='justify-start'/>
                    <p className='text-white mt-3'>India© 2023 Nike, Inc. All Rights Reserved</p>
                </div>

                <div className='flex justify-end items-end mr-12' >
                    <ul className='flex space-x-10'>
                        <li className='text-[#7E7E7E]'>Guides</li>
                        <li className='text-[#7E7E7E]'>Terms Of Sale</li>
                        <li className='text-[#7E7E7E]'>Terms Of Use</li>
                        <li className='text-[#7E7E7E]'>Nike Privacy Policy</li>
                    </ul>
                </div>
                </div>
            </div>
  )
}
