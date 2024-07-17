// File: pages/_app.tsx

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/fonts.css';
import Navbar from "../ui/navbar";
import type { AppProps } from 'next/app';
import NavbarAlt from '@/ui/NavbarAlt';
import Head from 'next/head';
import logo from '../public/assets/headlogo.png';
import CartProvider from "../ui/CartProvider";
import { loadStripe } from '@stripe/stripe-js';





function MyApp({ Component, pageProps }: AppProps) {

  return (
  <>
    <Head>
      <title>Adam Messaadia</title>
    </Head>

    <CartProvider
     mode="payment"
     cartMode="client-only"
     stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
     successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
     cancelUrl={`${process.env.NEXT_PUBLIC_URL}/?success=false`}
     currency="EUR"
     allowedCountries={["FR"]}
     shouldPersist={true}
   >
      <div className='bg'>
        <NavbarAlt />
          <Component {...pageProps} />;
      </div>
    </CartProvider>
  </>

  )
}

export default MyApp;
