"use client"

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  title: string;
  Category:string;
  price: string;
  image: string;
};

const BestOfAirMax = () => {
  const route = useRouter()
  const products: Product[] = [
    {
      id: 1,
      title: "Nike Air Max Pulse",
      Category:"Women's Shoes",
      price: "₹ 13 995",
      image: "/BOAI1.svg",
    },
    {
      id: 2,
      title: "Nike Air Max Pulse",
      Category:"Men's Shoes",
      price: "₹ 13 995",
      image: "/BOAI2.svg",
    },
    {
      id: 3,
      title: "Nike Air Max Pulse",
      Category:"Men's Shoes",
      price: "₹ 16 995",
      image: "/BOAI3.svg",
    },
  ];

//   return (
//     <div className="p-6">
//       <header className="flex justify-between mb-6 text-[#111111]">
//         <p className="text-white text-xl font-semibold">Best of Air Max</p>
//         <div className="flex space-x-2">
//         <button className="text-white">Shop</button>
//         <Image src="/Arrowback.svg" alt="Arrow" width={50} height={50}
//         className="h-[48] w-[48]"/>
//         <button onClick={()=>route.push("/products")}><Image src="/ForwardArrow.svg" alt="Arrow" width={50} height={50}
//         className="h-[48] w-[48]"/></button>
//         </div>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="rounded-md p-4 shadow-md flex flex-col items-center"
//           >
//             <Image
//               src={product.image}
//               alt={product.title}
//               width={270}
//               height={250}
//               className="mb-4"
//             />
//             <h3 className="font-semibold text-white text-lg">{product.title}</h3>
//             <p className="text-white font-bold">{product.Category}</p>
//             <p className="text-white font-bold">{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestOfAirMax;

return (
  <div className="w-full overflow-hidden p-4 sm:p-6 md:p-8">

    {/* Header */}
    <header className="mb-6 flex flex-col gap-4 text-[#111111] sm:flex-row sm:items-center sm:justify-between">

      <p className="text-lg font-semibold text-white sm:text-xl">
        Best of Air Max
      </p>

      <div className="flex items-center gap-2">
        <button className="text-sm text-white sm:text-base">
          Shop
        </button>

        <Image
          src="/Arrowback.svg"
          alt="Arrow"
          width={50}
          height={50}
          className="h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12"
        />

        <button onClick={() => route.push("/products")}>
          <Image
            src="/ForwardArrow.svg"
            alt="Arrow"
            width={50}
            height={50}
            className="h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12"
          />
        </button>
      </div>

    </header>


    {/* Products Grid */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">

      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center rounded-md p-3 shadow-md sm:p-4"
        >

          <div className="flex w-full justify-center">
            <Image
              src={product.image}
              alt={product.title}
              width={270}
              height={250}
              className="mb-4 h-auto w-full max-w-[270px] object-contain"
            />
          </div>

          <h3 className="w-full text-center text-base font-semibold text-white sm:text-lg">
            {product.title}
          </h3>

          <p className="mt-1 text-center text-sm font-bold text-white sm:text-base">
            {product.Category}
          </p>

          <p className="mt-1 text-center text-sm font-bold text-white sm:text-base">
            {product.price}
          </p>

        </div>
      ))}

    </div>

  </div>
  );
};

export default BestOfAirMax;