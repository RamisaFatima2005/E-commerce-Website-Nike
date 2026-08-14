// import React from "react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <div className="bg-[#111111] p-6">
      
//       <div className="flex flex-wrap justify-between items-center pt-10">
//         <div className="flex flex-wrap gap-8">
//           <h4 className="text-[#FFFFFF] font-medium">Find A STORE</h4>
//           <h4 className="text-[#FFFFFF] font-medium">GET HELP</h4>
//           <h4 className="text-[#FFFFFF] font-medium">ABOUT NIKE</h4>
//           <h4 className="text-[#FFFFFF] font-medium">Kid&apos;s</h4>
//         </div>

//         <div className="flex space-x-5 mt-4 sm:mt-0">
//           <Image src="/twitter.svg" alt="Twitter" width={30} height={30} />
//           <Image src="/fb.svg" alt="Facebook" width={30} height={30} />
//           <Image src="/youtube.svg" alt="Youtube" width={30} height={30} />
//           <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        
//         <div>
//           <ul>
//             <li className="text-[#FFFFFF] font-medium">BECOME A MEMBER</li>
//             <li className="text-[#FFFFFF] font-medium mt-4">SIGN UP FOR EMAIL</li>
//             <li className="text-[#FFFFFF] font-medium mt-4">SEND US FEEDBACK</li>
//             <li className="text-[#FFFFFF] font-medium mt-4">STUDENT DISCOUNTS</li>
//           </ul>
//         </div>

        
//         <div>
//           <ul>
//             <li className="text-[#757575] font-medium">Order Status</li>
//             <li className="text-[#757575] font-medium mt-4">Delivery</li>
//             <li className="text-[#757575] font-medium mt-4">Returns</li>
//             <li className="text-[#757575] font-medium mt-4">Payment Options</li>
//             <li className="text-[#757575] font-medium mt-4">
//               Contact Us On Nike.com Inquiries
//             </li>
//             <li className="text-[#757575] font-medium mt-4">
//               Contact Us On All Other Inquiries
//             </li>
//           </ul>
//         </div>

        
//         <div>
//           <ul>
//             <li className="text-[#757575] font-medium">News</li>
//             <li className="text-[#757575] font-medium mt-4">Careers</li>
//             <li className="text-[#757575] font-medium mt-4">Investors</li>
//             <li className="text-[#757575] font-medium mt-4">Sustainability</li>
//           </ul>
//         </div>

        
//         <div>
//           <ul>
//             <li className="text-[#757575] font-medium">
//               Infant & Toddler Shoes
//             </li>
//             <li className="text-[#757575] font-medium mt-4">Kid&apos;s Shoes</li>
//             <li className="text-[#757575] font-medium mt-4">
//               Kid&apos;s Jordan Shoes
//             </li>
//             <li className="text-[#757575] font-medium mt-4">
//               Kid&apos;s Basketball Shoes
//             </li>
//           </ul>
//         </div>
//       </div>

      
//       <div className="flex flex-wrap justify-between items-center mt-10">
        
//         <div className="flex items-center space-x-3">
//           <Image
//             src="/location.svg"
//             alt="Location Icon"
//             width={30}
//             height={30}
//           />
//           <p className="text-white text-sm">India© 2023 Nike, Inc. All Rights Reserved</p>
//         </div>

//         <ul className="flex flex-wrap justify-end space-x-5 text-[#7E7E7E] mt-4 sm:mt-0 text-sm">
//           <li>Guides</li>
//           <li>Terms Of Sale</li>
//           <li>Terms Of Use</li>
//           <li>Nike Privacy Policy</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#111111] px-4 py-8 sm:px-6 sm:py-10 lg:px-10">

      {/* Top Section */}
      <div className="flex flex-col items-start justify-between gap-6 pt-4 sm:pt-6 lg:flex-row lg:items-center lg:pt-10">

        <div className="flex flex-wrap gap-x-6 gap-y-3 sm:gap-x-8">
          <h4 className="text-sm font-medium text-[#FFFFFF] sm:text-base">
            FIND A STORE
          </h4>

          <h4 className="text-sm font-medium text-[#FFFFFF] sm:text-base">
            GET HELP
          </h4>

          <h4 className="text-sm font-medium text-[#FFFFFF] sm:text-base">
            ABOUT NIKE
          </h4>

          <h4 className="text-sm font-medium text-[#FFFFFF] sm:text-base">
            Kid&apos;s
          </h4>
        </div>

        <div className="flex flex-wrap gap-4 sm:gap-5">
          <Image
            src="/twitter.svg"
            alt="Twitter"
            width={30}
            height={30}
            className="h-7 w-7 sm:h-[30px] sm:w-[30px]"
          />

          <Image
            src="/fb.svg"
            alt="Facebook"
            width={30}
            height={30}
            className="h-7 w-7 sm:h-[30px] sm:w-[30px]"
          />

          <Image
            src="/youtube.svg"
            alt="Youtube"
            width={30}
            height={30}
            className="h-7 w-7 sm:h-[30px] sm:w-[30px]"
          />

          <Image
            src="/instagram.svg"
            alt="Instagram"
            width={30}
            height={30}
            className="h-7 w-7 sm:h-[30px] sm:w-[30px]"
          />
        </div>
      </div>


      {/* Main Footer Content */}
      <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">

        {/* Column 1 */}
        <div>
          <ul>
            <li className="text-sm font-medium text-[#FFFFFF] sm:text-base">
              BECOME A MEMBER
            </li>

            <li className="mt-4 text-sm font-medium text-[#FFFFFF] sm:text-base">
              SIGN UP FOR EMAIL
            </li>

            <li className="mt-4 text-sm font-medium text-[#FFFFFF] sm:text-base">
              SEND US FEEDBACK
            </li>

            <li className="mt-4 text-sm font-medium text-[#FFFFFF] sm:text-base">
              STUDENT DISCOUNTS
            </li>
          </ul>
        </div>


        {/* Column 2 */}
        <div>
          <ul>
            <li className="text-sm font-medium text-[#757575] sm:text-base">
              Order Status
            </li>

            <li className="mt-4 text-sm font-medium text-[#757575] sm:text-base">
              Delivery
            </li>

            <li className="mt-4 text-sm font-medium text-[#757575] sm:text-base">
              Returns
            </li>

            <li className="mt-4 text-sm font-medium text-[#757575] sm:text-base">
              Payment Options
            </li>

            <li className="mt-4 max-w-xs text-sm font-medium text-[#757575] sm:text-base">
              Contact Us On Nike.com Inquiries
            </li>

            <li className="mt-4 max-w-xs text-sm font-medium text-[#757575] sm:text-base">
              Contact Us On All Other Inquiries
            </li>
          </ul>
        </div>


        {/* Column 3 */}
        <div>
          <ul>
            <li className="text-sm font-medium text-[#757575] sm:text-base">
              News
            </li>

            <li className="mt-4 text-sm font-medium text-[#757575] sm:text-base">
              Careers
            </li>

            <li className="mt-4 text-sm font-medium text-[#757575] sm:text-base">
              Investors
            </li>

            <li className="mt-4 text-sm font-medium text-[#757575] sm:text-base">
              Sustainability
            </li>
          </ul>
        </div>


        {/* Column 4 */}
        <div>
          <ul>
            <li className="max-w-xs text-sm font-medium text-[#757575] sm:text-base">
              Infant & Toddler Shoes
            </li>

            <li className="mt-4 text-sm font-medium text-[#757575] sm:text-base">
              Kid&apos;s Shoes
            </li>

            <li className="mt-4 max-w-xs text-sm font-medium text-[#757575] sm:text-base">
              Kid&apos;s Jordan Shoes
            </li>

            <li className="mt-4 max-w-xs text-sm font-medium text-[#757575] sm:text-base">
              Kid&apos;s Basketball Shoes
            </li>
          </ul>
        </div>

      </div>


      {/* Bottom Section */}
      <div className="mt-8 flex flex-col gap-6 border-t border-[#333333] pt-6 sm:mt-10 sm:pt-8 lg:flex-row lg:items-center lg:justify-between lg:border-t-0 lg:pt-0">

        {/* Location + Copyright */}
        <div className="flex items-center gap-3">
          <Image
            src="/location.svg"
            alt="Location Icon"
            width={30}
            height={30}
            className="h-7 w-7 shrink-0 sm:h-[30px] sm:w-[30px]"
          />

          <p className="text-xs text-white sm:text-sm">
            India© 2023 Nike, Inc. All Rights Reserved
          </p>
        </div>


        {/* Bottom Links */}
        <ul className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-[#7E7E7E] sm:text-sm lg:justify-end">
          <li>Guides</li>
          <li>Terms Of Sale</li>
          <li>Terms Of Use</li>
          <li>Nike Privacy Policy</li>
        </ul>

      </div>

    </div>
  );
}