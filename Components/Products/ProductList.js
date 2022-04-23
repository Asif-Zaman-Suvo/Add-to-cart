import Image from 'next/image';
import React, { useContext } from 'react';
import { UserContext } from '../../pages/_app';

const ProductList = ({ result,handleAddProduct }) => {
    return (
        // <div classNameName="flex justify-center">
        //     <div classNameName="rounded-lg shadow-lg bg-red-200 max-w-sm">
        //         <div classNameName="p-6">
        //             <div classNameName="grid grid-col-2">
        //             <img classNameName="w-full " src={result.image_url} />
        //             </div>
        //             <h5 classNameName="text-gray-900 text-xl font-medium m-2">{result.title}</h5>

        //             {/* <Image src = {`/${image_url}.png`} alt="image" width="300" height="300"/> */}
        //             <p classNameName="text-gray-700 text-base my-8">{result.description}</p>
        //             <p classNameName="text-black text-xl mb-4">
        //                 <span>{result.price}</span>
        //             </p>
        //             <button
        //                 onClick={() => handleAddCart(result)}
        //                 type="button"
        //                 classNameName="cursor-pointer inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        //             >
        //                 Add to Cart
        //             </button>
        //         </div>
        //     </div>
        // </div>


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
                    <button onClick={() => handleAddProduct(result)} className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                        Add to Shopping Cart
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ProductList;