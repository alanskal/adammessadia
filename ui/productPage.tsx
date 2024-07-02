import Image from 'next/image'


// déstructure les props
// appelle le composant Image avec les props
// déstructure product puis indique que le composant attend un objet avec les clés id, name et desc
const ProductPage = ({ product }: {product: { id: number; name: string; desc: string; price: number;}}) => (
      <div className='productPage'>
          <Image className='productImage'
            src='/assets/kanyehoodie.png'
            width={300}
            height={300}
            alt="kanye'"
          />


          <div className='productInfos'>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <h1>Ajouter au panier</h1>
          </div>

      </div>
  )

  export default ProductPage;
