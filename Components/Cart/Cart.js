import React, { useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../pages/_app";
import CartList from "./CartList";

const Cart = () => {
    const router = useRouter();
    const [cart, setCart] = useContext(UserContext);

    //delete a product from cart

    function deleteCart(product_id) {
        const updatedProduct = cart.filter((pd) => pd.product_id !== product_id);
        setCart(updatedProduct);
        window.localStorage.removeItem("cart")
    }

    return (
        <section>
            <div className="text-center text-3xl mt-5">Cart List</div>
            <div className="text-center mt-5">
                <a
                    onClick={() => router.back()}
                    className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white cursor-pointer"
                >
                    Back to Products
                </a>
            </div>
            <div className="mx-auto px-8 py-8 grid grid-cols-3 gap-4 text-center text-3xl">
                {cart && cart.length > 0 && cart.map((result) => (
                    <CartList
                        deleteCart={deleteCart}
                        key={result.product_id}
                        result={result}
                    ></CartList>
                ))}
            </div>
        </section>
    );
};

export default Cart;