"use client"

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  title: string;
  Category:string;
  type:string;
  price: string;
  image: string;
};

const GearUp= () => {
  const route= useRouter()
  const products: Product[] = [
    {
        id: 1,
        title: "Nike Dri-FIT ADV TechKnit Ultra",
        Category:"Men's Short-Sleeve",
        type:"Running Top",
        price: "₹ 3 895",
        image: "/Gearup1.svg",
      },
      {
        id: 2,
        title: "Nike Dri-FIT Challenger",
        Category:"Men's 18cm (approx.) 2-",
        type:"in-1 Versatile Shorts",
        price: "₹ 2 495",
        image: "/Gearup2.svg",
      },
      {
        id: 3,
        title: "Nike Dri-FIT ADV Run Division",
        Category:"Women's Long-Sleeve",
        type:"Running Top",
        price: "₹ 5 295",
        image: "/Gearup3.svg",
      },
      {
        id: 4,
        title: "Nike Fast",
        Category:"Women's Mid-Rise 7/8 Running",
        type:"Leggings with Pockets",
        price: "₹ 3 795",
        image: "/Gearup4.svg",
      },
  ];

  return (
    <div className="p-6">
      <p className='text-[#111111] my-10 mx-6 font-semibold text-2xl'>Gear Up</p>
      
      <div className="flex justify-evenly">
        <h1 className="font-bold">Shop Men's</h1>
        <Image src="/Arrowback.svg" alt="BackArrow" width={50} height={50}/>
        <button onClick={()=>route.push("/products")}><Image src="/ForwardArrow.svg" alt="ForwardArrow" width={50} height={50}/></button>
        
        <h1 className="font-bold">Shop Women's</h1>
        <Image src="/Arrowback.svg" alt="BackArrow" width={50} height={50}/>
        <button onClick={()=>route.push("/products")}><Image src="/ForwardArrow.svg" alt="ForwardArrow" width={50} height={50}/></button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="rounded-md p-4 shadow-md flex flex-col items-center">
            <Image
              src={product.image}
              alt={product.title}
              width={270}
              height={250}
            />
            <h3 className="font-semibold text-[#111111] text-lg mt-5">{product.title}</h3>
            <p className="text-[#757575] font-bold">{product.Category}</p>
            <p className="text-[#757575] font-bold">{product.type}</p>
            <p className="text-[#111111] font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GearUp;
