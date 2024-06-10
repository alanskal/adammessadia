
import AdultAd from "./ui/adult-ad"
import ProductRow from "./ui/products-row";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./ui/paymentForm";



export default function Home() {

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );

function randTimeOut() {
return Math.floor(Math.random() * 10000)
}

randTimeOut()

// randomiser le content etc avec un object
  return (
  <div>



    <div className="text-center">
      <h1 className="title blink">ADAM MESSAADIA</h1>
      <AdultAd
      content="Fais grossir ton swag en seulement 2 semaines"
      id={1}
      timeOut={randTimeOut()}

      />
      <AdultAd
      content="skal n'aime pas TypeScript"
      id={2}
      timeOut={randTimeOut()}
      />
      <AdultAd
      content="test x: 700"
      id={3}
      timeOut={randTimeOut()}
      />
    </div>
        <div>
          <ProductRow />

        </div>
      </div>




  );
}
