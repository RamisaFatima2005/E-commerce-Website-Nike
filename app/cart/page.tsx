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
import { useCart } from "../context/page";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="w-full overflow-hidden px-4 py-6 sm:px-6 md:px-8 lg:px-10">

      <h1 className="my-5 text-2xl font-bold sm:my-6 sm:text-3xl md:text-4xl">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-sm sm:text-base">
          Your cart is empty!
        </p>
      ) : (
        <ul className="w-full">

          {cart.map((item) => (
            <li
              key={item.id}
              className="mb-4 flex w-full items-start gap-3 sm:gap-4"
            >

              <Image
                src={item.image}
                alt={item.name}
                height={50}
                width={50}
                className="h-14 w-14 shrink-0 object-contain sm:h-16 sm:w-16"
              />

              <div className="min-w-0 flex-1">

                <h2 className="break-words text-base font-bold sm:text-lg">
                  {item.name}
                </h2>

                <p className="break-words text-sm font-medium sm:text-lg">
                  {item.description}
                </p>

                <p className="text-base font-bold sm:text-lg">
                  {item.price}
                </p>

              </div>

            </li>
          ))}

        </ul>
      )}

    </div>
  );
};

export default CartPage;