
import AdultAd from "../ui/adult-ad"
import ProductRow from "../ui/products-row";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';




require('dotenv').config();



export default function Home() {

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

function randTimeOut() {
return Math.floor(Math.random() * 10000)
}

randTimeOut()




  return (
  <div className="main">

        <AdultAd
        id={1}
        timeOut={randTimeOut()}
        link='/images/ye.gif'
        height={200}
        width={400}

        />
        <AdultAd
        id={2}
        timeOut={randTimeOut()}
        link='/images/ye2.gif'
        height={200}
        width={480}

        />
        <AdultAd
        id={3}
        timeOut={randTimeOut()}
        link='/images/ye3.gif'
        height={480}
        width={480}

        />

        <AdultAd
        id={4}
        timeOut={randTimeOut()}
        link='/images/ye4.gif'
        height={200}
        width={400}

        />
        <AdultAd
        id={4}
        timeOut={randTimeOut()}
        link='/images/ye5.gif'
        height={200}
        width={400}

        />
        <Link href={'/shop'} >
          <Image
          className="enter"
          alt='enter'
          src='/images/shop.png'
          height={200}
          width={400}
          />
        </Link>
      </div>




  );
}
