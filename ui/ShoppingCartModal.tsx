import { useShoppingCart } from "use-shopping-cart";


export default function ShoppingCart() {

  const { shouldDisplayCart } = useShoppingCart();
  return (
      <div className="shouldDisplayCart">
        <ul>
          <li>item1</li>
          <li>item2</li>
        </ul>


      </div>

  )
}
