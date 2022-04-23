import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <Head>
        <title className="text-black">Shopping Cart</title>
      </Head>
      <div className="text-center text-5xl py-10 justify-center items-center">
        Welcome to the Shopping Cart
      </div>

      <Link passHref href="products">
        <div className="hover:text-black px-4 m-auto w-72 h-28 text-black bg-gray-200 rounded-md hover:bg-blue-400 cursor-pointer text-center text-2xl py-10 justify-center items-center">
          {" "}
        Product List
        </div>
      </Link>
    </div>
  )
}
