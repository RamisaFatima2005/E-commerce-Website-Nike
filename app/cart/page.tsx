// "use client";
// import Image from "next/image";
// import { useCart } from "../context/page";

// const CartPage = () => {
//     const { cart } = useCart();

//     return (
//         <div>
//             <h1 className="text-4xl font-bold my-6">Your Cart</h1>
//             {cart.length === 0 ? (
//                 <p>Your cart is empty!</p>
//             ) : (
//                 <ul>
//                     {cart.map((item) => (
//                         <li key={item.id} className="mb-4 flex items-center space-x-4">
//                             <Image src={item.image} alt={item.name} height={50} width={50} className="w-16 h-16" />
//                             <div>
//                                 <h2 className="text-lg font-bold">{item.name}</h2>
//                                 <p className="text-lg font-medium">{item.description}</p>
//                                 <p className="text-lg font-bold">{item.price}</p>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default CartPage;

"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="min-h-screen w-full bg-white px-4 py-8 sm:px-6 md:px-10 lg:px-16">

      {/* Header */}
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
            Your Cart
          </h1>

          {cart.length > 0 && (
            <p className="mt-2 text-sm text-[#757575]">
              {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
            </p>
          )}
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl bg-[#F5F5F5] px-6 py-12 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
              <span className="text-2xl">🛒</span>
            </div>

            <h2 className="text-xl font-semibold text-[#111111] sm:text-2xl">
              Your cart is empty!
            </h2>

            <p className="mt-2 max-w-md text-sm text-[#757575] sm:text-base">
              Looks like you haven&apos;t added anything to your cart yet.
            </p>
          </div>
        ) : (

          /* Cart Items */
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

            {/* Products */}
            <div className="lg:col-span-2">
              <ul className="space-y-4">

                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex w-full gap-4 rounded-2xl border border-gray-200 bg-white p-4 transition-shadow duration-200 hover:shadow-md sm:gap-6 sm:p-5"
                  >

                    {/* Product Image */}
                    <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-[#F5F5F5] sm:h-36 sm:w-36">
                      <Image
                        src={item.image}
                        alt={item.name}
                        height={150}
                        width={150}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>

                    {/* Product Information */}
                    <div className="flex min-w-0 flex-1 flex-col justify-center">

                      <h2 className="break-words text-base font-semibold text-[#111111] sm:text-lg">
                        {item.name}
                      </h2>

                      <p className="mt-1 break-words text-sm text-[#757575] sm:text-base">
                        {item.description}
                      </p>

                      <p className="mt-3 text-base font-semibold text-[#111111] sm:text-lg">
                        {item.price}
                      </p>

                    </div>

                  </li>
                ))}

              </ul>
            </div>

            {/* Summary */}
            <div className="h-fit rounded-2xl border border-gray-200 bg-[#F5F5F5] p-5 sm:p-6">

              <h2 className="text-xl font-semibold text-[#111111]">
                Summary
              </h2>

              <div className="mt-6 space-y-4 border-b border-gray-300 pb-5">

                <div className="flex justify-between text-sm text-[#111111] sm:text-base">
                  <span>Subtotal</span>
                  <span>Calculated at checkout</span>
                </div>

                <div className="flex justify-between text-sm text-[#111111] sm:text-base">
                  <span>Delivery</span>
                  <span>Free</span>
                </div>

              </div>

              <div className="flex justify-between pt-5 text-base font-semibold text-[#111111] sm:text-lg">
                <span>Total</span>
                <span>Calculated at checkout</span>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default CartPage;