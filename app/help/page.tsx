"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Help() {
    const route= useRouter()
  return (
    <div className='bg-[#FFFFFF]'>

        <div className='justify-center items-center text-center'>
            <h1 className='text-[#111111] font-bold text-3xl'>GET HELP</h1>
            <input
            type='text'
            placeholder='What can we help you with?'
            className='border rounded-lg h-10'/>
        </div>
        
        <div className='flex justify-around'>
            <div className='ml-10 mt-10'>
                <h3 className='text-[#111111] font-semibold text-2xl'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h3>
                <br/>
                <p className='text-[#111111]'>
                We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:
                <br/>
                Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro
                <br/>
                 If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
                 <br/>
                 Apple Pay
                 <br/>
                 <u className='text-[#111111] font-semibold'>Nike Members</u> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, join us today.
                </p>
                <br />
                <button onClick={()=>route.push("/products")} className='bg-[#111111] text-white rounded-full w-36 h-10'>Join Us</button>
                <button onClick={()=>route.push("/products")} className='bg-[#111111] text-white rounded-full w-36 h-10'>Shop Nike</button>

            <h1 className='text-[#111111] font-semibold ml-10 mt-5'>FAQs</h1>
            <br/>
            <h3 className='text-[#111111] font-semibold'>Does my card need international purchases enabled?</h3>
            <p className='text-[#111111]'>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
                <br/>
                Please note, some banks may charge <u>a small transaction fee</u> for international orders.
            </p>
            <br/>
            <h3 className='text-[#111111] font-semibold'>Can I pay for my order with multiple methods?</h3>
            <p className='text-[#111111]'>No, payment for Nike orders can't be split between multiple payment methods.</p>
            <br/>

            <h3 className='text-[#111111] font-semibold'>What payment method is accepted for SNKRS orders?</h3>
            <p className='text-[#111111]'>You can use any accepted credit card to pay for your SNKRS order.</p>

            <br/>
            <h3 className='text-[#111111] font-semibold'>Why don't I see Apple Pay as an option?</h3>
            <p className='text-[#111111]'>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
            <br/>

            <p className='text-[#111111]'>Was this answer helpful?</p>
            <p>👍👎</p>
            <h4 className='text-[#757575]'>RELATED</h4>
            <br/>

            <p className='text-[#111111] font-semibold'><u>WHAT ARE NIKE'S DELIVERY OPTIONS?</u></p>
            <br/>
            <p className='text-[#111111] font-semibold'><u>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</u></p>
            <br/>
            <br/>
        </div>

        <div className='h-auto w-auto border p-16 justify-center items-center text-center'>
            <h1 className='text-[#111111] font-semibold'>CONTACT US</h1>
            <Image src="/mbl.svg" alt='contact' width={100} height={100} className='ml-14'/>
            <p className='text-[#111111]'>000 800 919 0566
                <br/>
     Products & Orders: 24 hours a day, 7 days a week
     <br />
      Company Info & Enquiries: 07:30 -
      <br /> 
      16:30, Monday - Friday</p>
      <br />
      <br />
      <Image src="/sms.svg" alt='contact' width={100} height={100} className='ml-14'/>
      <p className='text-[#111111]'>24 hours a day
        <br />
      7 days a week</p>
      <br />
      <br />
      <Image src="/mail.svg" alt='contact' width={100} height={100} className='ml-14'/>
      <p className='text-[#111111]'>We'll reply within
        <br />
      five business days</p>
      <br />
      <br />
      <Image src="/contactlocation.svg" alt='contact' width={100} height={100} className='ml-14'/>
      <h3 className='text-xl text-[#111111]'>STORE LOCATOR</h3>
      <p className='text-[#111111]'>Find Nike retail stores near you</p>
        </div>
            </div>
        </div>

        
        
  )
}
