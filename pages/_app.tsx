// File: pages/_app.tsx

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/fonts.css';
import Navbar from "../ui/navbar";
import type { AppProps } from 'next/app';
import NavbarAlt from '@/ui/NavbarAlt';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className='bg'>
    <NavbarAlt />
      <Component {...pageProps} />;
  </div>

  )
}

export default MyApp;
