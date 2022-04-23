import Link from 'next/link';
import React, { useContext } from "react";
import { UserContext } from '../../pages/_app';
import data from '../../public/data.json'
import ProductList from './ProductList';

const Products = () => {

    const [cart, setCart] = useContext(UserContext);
    const handleAddProduct = (result) => {
        const updatedArray = [...cart, result];
        Promise.all([
            setCart((prev) => {
                return [...prev, result];
            }),
        ]).then(() =>
            localStorage.setItem("cart", JSON.stringify(updatedArray)),
            alert(`${result.title} is added to carts list`)
        );
    };
    return (
        <section className="text-center text-3xl">
            <div className="grid">
                All Products
                <button className='bg-green-300'> <Link href="cart">  Go to Cart List </Link></button>
                <button className='bg-red-300 mt-4'> <Link href="/">  Go to homepage </Link></button>
            </div>
            <div className="mx-auto px-8 py-8 grid grid-cols-3 gap-4 text-center text-3xl">
                {data && data.length > 0 && data.map((result) => (
                    <ProductList
                        handleAddProduct={handleAddProduct}
                        key={result.product_id}
                        result={result}
                    ></ProductList>
                ))}
            </div>
        </section>
    );
};

export default Products;