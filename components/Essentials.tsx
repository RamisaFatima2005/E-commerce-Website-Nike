// import React from "react";
// import Image from "next/image";

// export default function Essentials() {
//   return (
//     <div className="p-6">
//       <h1 className="text-white my-10 font-semibold text-xl sm:text-2xl">
//         The Essentials
//       </h1>

//       <div className="flex flex-wrap gap-4 justify-center">
//         <Image
//           src="/Essentials1.svg"
//           alt="Essentials Picture"
//           width={500}
//           height={500}
//           className="w-full max-w-sm sm:max-w-md h-auto"
//         />
//         <Image
//           src="/Essentials2.svg"
//           alt="Essentials Picture"
//           width={500}
//           height={500}
//           className="w-full max-w-sm sm:max-w-md h-auto"
//         />
//         <Image
//           src="/Essentials3.svg"
//           alt="Essentials Picture"
//           width={500}
//           height={500}
//           className="w-full max-w-sm sm:max-w-md h-auto"
//         />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center items-center text-center my-10">
        
//         <div className="w-36">
//           <h4 className="text-white font-semibold">Icons</h4>
//           <ul className="mt-4 space-y-3">
//             <li className="text-[#757575] font-medium">Air Force 1</li>
//             <li className="text-[#757575] font-medium">Huarache</li>
//             <li className="text-[#757575] font-medium">Air Max 90</li>
//             <li className="text-[#757575] font-medium">Air Max 95</li>
//           </ul>
//         </div>

//         <div className="w-52">
//           <h4 className="text-white font-semibold">Shoes</h4>
//           <ul className="mt-4 space-y-3">
//             <li className="text-[#757575] font-medium">All Shoes</li>
//             <li className="text-[#757575] font-medium">Customs Shoes</li>
//             <li className="text-[#757575] font-medium">Jordan Shoes</li>
//             <li className="text-[#757575] font-medium">Running Shoes</li>
//           </ul>
//         </div>

//         <div className="w-52">
//           <h4 className="text-white font-semibold">Clothing</h4>
//           <ul className="mt-4 space-y-3">
//             <li className="text-[#757575] font-medium">All Clothing</li>
//             <li className="text-[#757575] font-medium">Modest Wear</li>
//             <li className="text-[#757575] font-medium">Hoodies & Pullovers</li>
//             <li className="text-[#757575] font-medium">Shirts & Tops</li>
//           </ul>
//         </div>

//         <div className="w-52">
//           <h4 className="text-white font-semibold">Kid&apos;s</h4>
//           <ul className="mt-4 space-y-3">
//             <li className="text-[#757575] font-medium">
//               Infant & Toddler Shoes
//             </li>
//             <li className="text-[#757575] font-medium">Kid&apos;s Shoes</li>
//             <li className="text-[#757575] font-medium">
//               Kid&apos;s Jordan Shoes
//             </li>
//             <li className="text-[#757575] font-medium">
//               Kid&apos;s Basketball Shoes
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";

export default function Essentials() {
  return (
    <div className="w-full overflow-hidden px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10">

      {/* Heading */}
      <h1 className="my-6 text-lg font-semibold text-white sm:my-8 sm:text-xl md:my-10 md:text-2xl">
        The Essentials
      </h1>


      {/* Essentials Images */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">

        <div className="flex justify-center">
          <Image
            src="/Essentials1.svg"
            alt="Essentials Picture"
            width={500}
            height={500}
            className="h-auto w-full max-w-[500px] object-contain"
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/Essentials2.svg"
            alt="Essentials Picture"
            width={500}
            height={500}
            className="h-auto w-full max-w-[500px] object-contain"
          />
        </div>

        <div className="flex justify-center sm:col-span-2 lg:col-span-1">
          <Image
            src="/Essentials3.svg"
            alt="Essentials Picture"
            width={500}
            height={500}
            className="h-auto w-full max-w-[500px] object-contain"
          />
        </div>

      </div>


      {/* Categories */}
      <div className="my-8 grid grid-cols-1 gap-8 text-center sm:my-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

        {/* Icons */}
        <div className="mx-auto w-full max-w-[220px]">
          <h4 className="font-semibold text-white">
            Icons
          </h4>

          <ul className="mt-4 space-y-3">
            <li className="font-medium text-[#757575]">Air Force 1</li>
            <li className="font-medium text-[#757575]">Huarache</li>
            <li className="font-medium text-[#757575]">Air Max 90</li>
            <li className="font-medium text-[#757575]">Air Max 95</li>
          </ul>
        </div>


        {/* Shoes */}
        <div className="mx-auto w-full max-w-[220px]">
          <h4 className="font-semibold text-white">
            Shoes
          </h4>

          <ul className="mt-4 space-y-3">
            <li className="font-medium text-[#757575]">All Shoes</li>
            <li className="font-medium text-[#757575]">Customs Shoes</li>
            <li className="font-medium text-[#757575]">Jordan Shoes</li>
            <li className="font-medium text-[#757575]">Running Shoes</li>
          </ul>
        </div>


        {/* Clothing */}
        <div className="mx-auto w-full max-w-[220px]">
          <h4 className="font-semibold text-white">
            Clothing
          </h4>

          <ul className="mt-4 space-y-3">
            <li className="font-medium text-[#757575]">All Clothing</li>
            <li className="font-medium text-[#757575]">Modest Wear</li>
            <li className="font-medium text-[#757575]">
              Hoodies & Pullovers
            </li>
            <li className="font-medium text-[#757575]">
              Shirts & Tops
            </li>
          </ul>
        </div>


        {/* Kids */}
        <div className="mx-auto w-full max-w-[220px]">
          <h4 className="font-semibold text-white">
            Kid&apos;s
          </h4>

          <ul className="mt-4 space-y-3">
            <li className="font-medium text-[#757575]">
              Infant & Toddler Shoes
            </li>

            <li className="font-medium text-[#757575]">
              Kid&apos;s Shoes
            </li>

            <li className="font-medium text-[#757575]">
              Kid&apos;s Jordan Shoes
            </li>

            <li className="font-medium text-[#757575]">
              Kid&apos;s Basketball Shoes
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
}