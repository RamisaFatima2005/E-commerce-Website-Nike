import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#111111] p-6">
      
      <div className="flex flex-wrap justify-between items-center pt-10">
        <div className="flex flex-wrap gap-8">
          <h4 className="text-[#FFFFFF] font-medium">Find A STORE</h4>
          <h4 className="text-[#FFFFFF] font-medium">GET HELP</h4>
          <h4 className="text-[#FFFFFF] font-medium">ABOUT NIKE</h4>
          <h4 className="text-[#FFFFFF] font-medium">Kid&apos;s</h4>
        </div>

        <div className="flex space-x-5 mt-4 sm:mt-0">
          <Image src="/twitter.svg" alt="Twitter" width={30} height={30} />
          <Image src="/fb.svg" alt="Facebook" width={30} height={30} />
          <Image src="/youtube.svg" alt="Youtube" width={30} height={30} />
          <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        
        <div>
          <ul>
            <li className="text-[#FFFFFF] font-medium">BECOME A MEMBER</li>
            <li className="text-[#FFFFFF] font-medium mt-4">SIGN UP FOR EMAIL</li>
            <li className="text-[#FFFFFF] font-medium mt-4">SEND US FEEDBACK</li>
            <li className="text-[#FFFFFF] font-medium mt-4">STUDENT DISCOUNTS</li>
          </ul>
        </div>

        
        <div>
          <ul>
            <li className="text-[#757575] font-medium">Order Status</li>
            <li className="text-[#757575] font-medium mt-4">Delivery</li>
            <li className="text-[#757575] font-medium mt-4">Returns</li>
            <li className="text-[#757575] font-medium mt-4">Payment Options</li>
            <li className="text-[#757575] font-medium mt-4">
              Contact Us On Nike.com Inquiries
            </li>
            <li className="text-[#757575] font-medium mt-4">
              Contact Us On All Other Inquiries
            </li>
          </ul>
        </div>

        
        <div>
          <ul>
            <li className="text-[#757575] font-medium">News</li>
            <li className="text-[#757575] font-medium mt-4">Careers</li>
            <li className="text-[#757575] font-medium mt-4">Investors</li>
            <li className="text-[#757575] font-medium mt-4">Sustainability</li>
          </ul>
        </div>

        
        <div>
          <ul>
            <li className="text-[#757575] font-medium">
              Infant & Toddler Shoes
            </li>
            <li className="text-[#757575] font-medium mt-4">Kid&apos;s Shoes</li>
            <li className="text-[#757575] font-medium mt-4">
              Kid&apos;s Jordan Shoes
            </li>
            <li className="text-[#757575] font-medium mt-4">
              Kid&apos;s Basketball Shoes
            </li>
          </ul>
        </div>
      </div>

      
      <div className="flex flex-wrap justify-between items-center mt-10">
        
        <div className="flex items-center space-x-3">
          <Image
            src="/location.svg"
            alt="Location Icon"
            width={30}
            height={30}
          />
          <p className="text-white text-sm">India© 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        <ul className="flex flex-wrap justify-end space-x-5 text-[#7E7E7E] mt-4 sm:mt-0 text-sm">
          <li>Guides</li>
          <li>Terms Of Sale</li>
          <li>Terms Of Use</li>
          <li>Nike Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
}
