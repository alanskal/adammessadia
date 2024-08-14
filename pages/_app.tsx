// File: pages/_app.tsx

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/fonts.css';
import Navbar from "../ui/navbar";
import type { AppProps } from 'next/app';
import NavbarAlt from '@/ui/NavbarAlt';
import Head from 'next/head';
import logo from '../public/assets/headlogo.png';
import { CartProvider } from '../context/CartContext';



function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>Adam Messaadia</title>
    </Head>
    <CartProvider>
      <div className='bg'>
        <NavbarAlt />
          <Component {...pageProps} />;
      </div>
      </CartProvider>
  </>

  )
}

export default MyApp;
