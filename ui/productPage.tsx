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
            <div className='productDesc p-2'>
              <p>{product.name} - {product.price}€</p>
              <p>{product.desc.charAt(0).toUpperCase() + product.desc.slice(1)} </p>

              <button className='btn btn-primary addToCart'>Ajouter au panier</button>
            </div>

          {/* peut être logo ici */}
          <div className='productName'>
            <h1>{product.name}</h1>
          </div>
      </div>

  )

  export default ProductPage;
