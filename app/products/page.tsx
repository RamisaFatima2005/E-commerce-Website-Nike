"use client"

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Products = () => {
  const route=useRouter()
  const products = [
    {
      id: 1,
      mode:"Just In",
      name: "Nike Air Force 1 Mid '07",
      category:"Men's Shoes",
      colour:1,
      price: "MRP : ₹ 10 795.00",
      image: "/product1shoe.svg",
    },
    {
        id: 2,
        mode:"Just In",
        name: "Nike Air Force 1 PLT.AF.ORM",
        category:"Women's Shoes",
        colour:1,
        price: "MRP : ₹ 8 695.00",
        image: "/products2shoe.svg",
      },
      {
        id: 3,
        mode:"Sustainable Materials",
        name: "Nike Dri-FIT UV Hyverse",
        category:"Men's Short-Sleeve Graphic Fitness Top",
        colour:1,
        price: "MRP : ₹ 2 495.00",
        image: "/products3fitnesstopmen.svg",
      },
      {
        id: 4,
        mode:"Just In",
        name: "Nike Standard Issue",
        category:"Women's Basketball Jersey",
        colour:1,
        price: "MRP : ₹ 2 895.00",
        image: "/products4basketballgirl.svg",
      },
      {
        id: 5,
        mode:"Just In",
        name: "Serena Williams Design Crew",
        category:"Women's Full-zip Top",
        colour:1,
        price: "MRP : ₹ 5 495.00",
        image: "/products5fullziptop.svg",
      },
      {
        id: 6,
        mode:"Just In",
        name: "Nike Air Max 270 GO",
        category:"Baby/Toddler Easy On/Off Shoes",
        colour:1,
        price: "MRP : ₹ 6 995.00",
        image: "/product6kidshoe.svg",
      },
      {
        id: 7,
        mode:"Just In",
        name: "Nike Sportswear",
        category:"Women's Ribbed Jersey Short-Sleeve Top",
        colour:2,
        price: "MRP : ₹ 3 295.00",
        image: "/product7suit.svg",
      },
      {
        id: 8,
        mode:"Just In",
        name: "Nike Sportswear",
        category:"Older Kids' (Girls') T-Shirt",
        colour:1,
        price: "MRP : ₹ 1 295.00",
        image: "/product8kidsuit.svg",
      }
  ];

  return (
    <div className="py-10">
    <div className="flex justify-between">
        <h1 className="font-bold text-2xl ml-10">New"500"</h1>
        <Image src='/Auto Layout Horizontal.svg' alt="Layout Picture" width={250} height={250}/>
        </div>

        <div  className="px-10 py-5 flex justify-around space-x-24">
      <ul className="space-y-2">
        <li>Shoes</li>
        <li>Sports Bras</li>
        <li>Tops & T-Shirts</li>
        <li>Hoodies & Sweatshirts</li>
        <li>Jackets</li>
        <li>Trousers & Tights</li>
        <li>Shorts</li>
        <li>Tracksuits</li>
        <li>Jumpsuits & Rompers</li>
        <li>Skirts & Dresses</li>
        <li>Socks</li>
        <li>Accessories & Equipment</li>
        <br/>
        <br/>
        <br/>
        <ul>
            <h1 className="font-semibold">Gents</h1>
            <li>Men</li>
            <li>Women</li>
            <li>Unisex</li>
            </ul>
            <li>
            <h1 className="font-semibold">Kids</h1>
            <li>Boys</li>
            <li>Girls</li>
            </li>
            <li>
            <h1 className="font-semibold">Shop By Price</h1>
            <li>Under ₹ 2 500.00</li>
            <li>₹ 2 501.00 - ₹ 7 500.00</li>
            </li>
        </ul>
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-lg font-semibold text-red-500">Our Products</h2>
        <h1 className="text-3xl font-bold my-2">Explore Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={270}
                  height={250}
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-[#9E3500]">{product.mode}</p>
                <button onClick={()=>route.push(`/products/${product.id}`)}><h3 className="text-[#111111] font-bold">{product.name}</h3></button>
                <p className="text-[#757575] font-medium">{product.category}</p>
                <p className="text-[#757575] font-medium">{product.colour} Colour</p>
                <p className="text-[#111111] font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>
        
        <div>
            <h1 className="text-[#111111] font-bold text-2xl">Related Categories</h1>
            <br/>
        <div className="flex space-x-8 ml-24">
            <button className="bg-[#FFFFFF] text-[#111111] border rounded-full w-[160] h-[34]">Best Selling Products</button>
            <button className="bg-[#FFFFFF] text-[#111111] border rounded-full w-[160] h-[34]">Best Shoes</button>
            <button className="bg-[#FFFFFF] text-[#111111] border rounded-full w-[160] h-[34]">New Basktball Shoes</button>
            <button className="bg-[#FFFFFF] text-[#111111] border rounded-full w-[160] h-[34]">New Football Shoes</button>
            <button className="bg-[#FFFFFF] text-[#111111] border rounded-full w-[160] h-[34]">New Men's Shoes</button>
            <button className="bg-[#FFFFFF] text-[#111111] border rounded-full w-[160] h-[34]">New Running Shoes</button>
            <button className="bg-[#FFFFFF] text-[#111111] border rounded-full w-[160] h-[34]">Best Men's Shoes</button>
        </div>
        <div className="flex space-x-8 ml-24 mt-5">
            <button className="bg-[#FFFFFF] text-[#111111] border rounded-full w-[160] h-[34]">New Jordan Shoes</button>
            <button className="bg-[#FFFFFF] text-[#111111] border rounded-full w-[160] h-[34]">Best Women's Shoes</button>
            <button className="bg-[#FFFFFF] text-[#111111] border rounded-full w-[160] h-[34]">Best Training & Gym</button>
        </div>
        </div>
    </div>
      
  );
};

export default Products;
