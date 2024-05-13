
import AdultAd from "./ui/adult-ad"


export default function Home() {
  return (
    <div className="text-center">
      <h1 className="now-open blink">NOW OPEN</h1>
      <AdultAd
      content="Fais grossir ton swag en seulement 2 semaines"
      id={1}
      timeOut={3000}
      />
      <AdultAd
      content="skal n'aime pas TypeScript"
      id={2}
      timeOut={7000}
      />
      <AdultAd
      content="test"
      id={3}
      timeOut={1000}
      />
    </div>

  );
}
