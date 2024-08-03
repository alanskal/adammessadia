import Image from 'next/image'


// déstructure les props
// appelle le composant Image avec les props
// déstructure product puis indique que le composant attend un objet avec les clés id, name et desc
const ProductPage = ({ product }: {product: { id: number; name: string; desc: string; price: number, image: string;}}) => (
      <div className='productPage'>
        <div>

          <Image className='productImage'
            src={product.image}
            width={300}
            height={300}

            alt={product.name}
            />
          </div>


          <div className='productInfos container-fluid'>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
            <h1>Ajouter au panier</h1>
          </div>

      </div>

      // blablibla
  )

  export default ProductPage;
