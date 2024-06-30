
import AdultAd from "./ui/adult-ad"
import ProductRow from "./ui/products-row";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./ui/paymentForm";
import Image from 'next/image'

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
  <div>



    <div className="text-center">
      <div className="title blink">
        <Image
        src="/assets/sitelogo.png"
        alt="logo"
        height={150}
        width={150}
        />
        </div>
      </div>

        <AdultAd
        id={1}
        timeOut={randTimeOut()}
        link='/assets/ye.gif'
        height={200}
        width={400}

        />
        <AdultAd
        id={2}
        timeOut={randTimeOut()}
        link='/assets/ye2.gif'
        height={200}
        width={480}

        />
        <AdultAd
        id={3}
        timeOut={randTimeOut()}
        link='/assets/ye3.gif'
        height={480}
        width={480}

        />

        <AdultAd
        id={4}
        timeOut={randTimeOut()}
        link='/assets/ye4.gif'
        height={200}
        width={400}

        />

          <ProductRow />


      </div>




  );
}
