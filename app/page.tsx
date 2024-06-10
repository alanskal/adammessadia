
import AdultAd from "./ui/adult-ad"
import ProductRow from "./ui/products-row";



export default function Home() {

function randTimeOut() {
return Math.floor(Math.random() * 10000)
}

randTimeOut()

// randomiser le content etc avec un object
  return (
  <div>



    <div className="text-center">
      <h1 className="title blink">ADAM MESSADIA</h1>
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
