"use client";
import { useRouter } from "next/navigation";
import { use } from "react";
import Image from "next/image";
import productsdetail from "@/data/products";
import { useCart } from "@/app/context/page";

const ProductDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const resolvedParams = use(params);
    const route = useRouter();
    const { addToCart } = useCart(); 
    const prod = productsdetail.find((p) => p.id === resolvedParams.id);

    if (!prod) {
        return <p>Product not found!</p>;
    }

    const handleAddToCart = () => {
        addToCart(prod); 
        alert(`${prod.name} has been added to your cart!`);
    };

    return (
        <div>
        <div className="bg-[#FFFFFF] flex">
            <div>
            <Image src={prod.image} alt={prod.name} width={500} height={500} className="my-28 ml-28" />
            </div>
            <div className="h-96 justify-end w-96 ml-60 my-28">
            <h1 className="text-5xl font-bold text-[#111111] mx-5 py-6">{prod.name}</h1>
            <p className="text-[#111111] text-lg">{prod.description}</p>
            <p className="text-[#111111] font-bold text-3xl mt-4">{prod.price}</p>
            <div className="mt-6">
            <button onClick={handleAddToCart} className='bg-[#111111] text-white rounded-full w-36 h-10'>Add to Cart</button>
            </div>
            </div>
        </div>
        </div>
    );
};

export default ProductDetailPage;
