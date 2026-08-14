// import Image from 'next/image';
// import React from 'react';

// export default function HomePage() {
//   return (
//     <div className="bg-[#F5F5F5]">
//       <div className="flex flex-col items-center justify-center text-center p-6 sm:p-10">
//         <h1 className="font-semibold text-[#111111] text-lg sm:text-xl md:text-2xl">
//           Hello Nike App
//         </h1>
//         <p className="text-[#111111] text-sm sm:text-base md:text-lg">
//           Download the app to access everything Nike.{' '}
//           <button>
//             <b>
//               <u>Get Your Great</u>
//             </b>
//           </button>
//         </p>
//       </div>

//       <div className="flex justify-center mx-auto">
//         <Image
//           src="/HomePage.svg"
//           alt="LandingpagePicture"
//           width={1400}
//           height={1100}
//           className="w-full max-w-screen-lg h-auto mx-auto"
//         />
//       </div>

//       <div className="text-center px-6 sm:px-10 my-10">
//         <h2 className="font-medium text-sm sm:text-base md:text-lg text-black">First Look</h2>
//         <h1 className="font-semibold text-2xl sm:text-4xl md:text-5xl text-black">
//           NIKE AIR MAX PULSE
//         </h1>
//         <p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed text-black">
//           Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
//           Pulse
//           <br />
//           —designed to push you past your limits and help you go to the max.
//         </p>
//       </div>

//       <div className="flex flex-wrap justify-center gap-3 my-3">
//         <button className="bg-[#111111] text-white rounded-full w-24 h-10 sm:w-28 sm:h-12 ">
//           Notify Me
//         </button>
//         <button className="bg-[#111111] text-white rounded-full w-36 h-10 sm:w-40 sm:h-12">
//           Shop Air Max
//         </button>
//       </div>
//     </div>
//   );
// }

import Image from 'next/image';
import React from 'react';

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden bg-[#F5F5F5]">

      {/* App Introduction */}
      <div className="flex flex-col items-center justify-center px-4 py-6 text-center sm:px-6 sm:py-10 md:px-10">

        <h1 className="text-base font-semibold text-[#111111] sm:text-xl md:text-2xl">
          Hello Nike App
        </h1>

        <p className="mt-1 text-xs leading-relaxed text-[#111111] sm:text-sm md:text-base lg:text-lg">
          Download the app to access everything Nike.{" "}
          <button>
            <b>
              <u>Get Your Great</u>
            </b>
          </button>
        </p>

      </div>


      {/* Hero Image */}
      <div className="flex w-full justify-center px-3 sm:px-5 md:px-8">
        <Image
          src="/HomePage.svg"
          alt="LandingpagePicture"
          width={1400}
          height={1100}
          priority
          className="h-auto w-full max-w-[1400px] object-contain"
        />
      </div>


      {/* Product Introduction */}
      <div className="mx-auto my-8 w-full max-w-5xl px-4 text-center sm:my-10 sm:px-6 md:my-12 md:px-10">

        <h2 className="text-sm font-medium text-black sm:text-base md:text-lg">
          First Look
        </h2>

        <h1 className="mt-1 text-2xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
          NIKE AIR MAX PULSE
        </h1>

        <p className="mx-auto mt-3 max-w-4xl text-sm font-normal leading-relaxed text-black sm:text-base md:text-lg">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse
          <br className="hidden sm:block" />
          —designed to push you past your limits and help you go to the max.
        </p>

      </div>


      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3 px-4 pb-8 sm:pb-10 md:pb-12">

        <button className="h-10 w-24 rounded-full bg-[#111111] text-sm text-white sm:h-12 sm:w-28 sm:text-base">
          Notify Me
        </button>

        <button className="h-10 w-36 rounded-full bg-[#111111] text-sm text-white sm:h-12 sm:w-40 sm:text-base">
          Shop Air Max
        </button>

      </div>

    </div>
  );
}