// File: pages/_app.tsx

import 'bootstrap/dist/css/bootstrap.css';
import '../globals.css';  // Importe tes autres fichiers CSS globaux ici
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
