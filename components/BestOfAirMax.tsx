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

  return (
    <div className="p-6">
      <header className="flex justify-between mb-6 text-[#111111]">
        <p className="text-[#111111] text-xl font-semibold">Best of Air Max</p>
        <div className="flex space-x-2">
        <button>Shop</button>
        <Image src="/Arrowback.svg" alt="Arrow" width={50} height={50}
        className="h-[48] w-[48]"/>
        <button onClick={()=>route.push("/products")}><Image src="/ForwardArrow.svg" alt="Arrow" width={50} height={50}
        className="h-[48] w-[48]"/></button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-md p-4 shadow-md flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={270}
              height={250}
              className="mb-4"
            />
            <h3 className="font-semibold text-[#111111] text-lg">{product.title}</h3>
            <p className="text-[#757575] font-bold">{product.Category}</p>
            <p className="text-[#111111] font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestOfAirMax;
