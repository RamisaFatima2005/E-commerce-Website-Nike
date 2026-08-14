// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React from "react";

// export default function DontMiss() {
//   const route = useRouter();
//   return (
//     <div className="p-6">
//       <h1 className="text-white my-10 font-semibold text-xl sm:text-2xl">
//         Don&apos;t Miss
//       </h1>

//       <div className="flex justify-center">
//         <Image
//           src="/DontMiss.svg"
//           alt="DontMiss Picture"
//           width={1400}
//           height={1100}
//           className="w-full max-w-4xl h-auto"
//         />
//       </div>

//       <div className="flex flex-col justify-center items-center text-center mt-10">
//         <h1 className="text-white text-2xl sm:text-4xl font-semibold">
//           FLIGHT ESSENTIALS
//         </h1>
//         <p className="mt-4 text-sm sm:text-base">
//           Your built-to-last, all-week wears—but with style only Jordan Brand
//           can deliver.
//         </p>
//       </div>

//       <div className="flex justify-center mt-5">
//         <button
//           onClick={() => route.push("/products")}
//           className="bg-[#111111] text-white rounded-full w-32 sm:w-36 h-10 text-sm sm:text-base"
//         >
//           Shop
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function DontMiss() {
  const route = useRouter();

  return (
    <div className="w-full overflow-hidden px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10">

      {/* Heading */}
      <h1 className="my-6 text-lg font-semibold text-white sm:my-8 sm:text-xl md:my-10 md:text-2xl">
        Don&apos;t Miss
      </h1>


      {/* Image */}
      <div className="flex w-full justify-center">
        <Image
          src="/DontMiss.svg"
          alt="DontMiss Picture"
          width={1400}
          height={1100}
          className="h-auto w-full max-w-[1400px] object-contain"
        />
      </div>


      {/* Content */}
      <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-center px-2 text-center sm:mt-10">

        <h1 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
          FLIGHT ESSENTIALS
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white sm:mt-4 sm:text-base md:text-lg">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>

      </div>


      {/* Shop Button */}
      <div className="mt-5 flex justify-center sm:mt-6">

        <button
          onClick={() => route.push("/products")}
          className="h-10 w-32 rounded-full bg-[#111111] text-sm text-white transition-opacity hover:opacity-90 sm:h-11 sm:w-36 sm:text-base"
        >
          Shop
        </button>

      </div>

    </div>
  );
}