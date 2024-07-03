// File: pages/_app.tsx

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/fonts.css';
import Navbar from "../ui/navbar";
import type { AppProps } from 'next/app';
import NavbarAlt from '@/ui/NavbarAlt';
import Head from 'next/head';
import logo from '../public/assets/headlogo.png';



function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <title>Adam Messaadia</title>
    </Head>
      <div className='bg'>
        <NavbarAlt />
          <Component {...pageProps} />;
      </div>
  </>

  )
}

export default MyApp;
