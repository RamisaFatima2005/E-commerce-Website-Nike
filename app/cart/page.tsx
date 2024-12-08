"use client";
import Image from "next/image";
import { useCart } from "../context/page";

const CartPage = () => {
    const { cart } = useCart();

    return (
        <div>
            <h1 className="text-4xl font-bold my-6">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="mb-4 flex items-center space-x-4">
                            <Image src={item.image} alt={item.name} height={50} width={50} className="w-16 h-16" />
                            <div>
                                <h2 className="text-lg font-bold">{item.name}</h2>
                                <p className="text-lg font-medium">{item.description}</p>
                                <p className="text-lg font-bold">{item.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartPage;
