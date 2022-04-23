import React from "react";

const CartList = ({ result, deleteCart }) => {
  return (
    <div className="flex max-w-md bg-slate-300 shadow-lg rounded-lg overflow-hidden">
    <div className="w-1/3 bg-cover bg-landscape">
        <img classNameName="w-full" src={result.image_url} />
    </div>
    <div className="w-2/3 p-4">
        <h1 className="text-gray-900 font-bold text-2xl">
            {result.title}
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
            {result.description}
        </p>
        <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">
                {result.price}
            </h1>
            <button onClick={() => deleteCart(result.product_id)} className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
               Remove from cart
            </button>
        </div>
    </div>
</div>
  );
};

export default CartList;