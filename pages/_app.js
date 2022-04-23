import { createContext, useEffect, useState } from "react";
import '../styles/globals.css'
export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([]);
  return (
    <>
      <UserContext.Provider value={[cart, setCart]}>
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp
