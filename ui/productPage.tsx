import Image from 'next/image'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


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
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <div className='mb-2 d-flex justify-center taille'>
              <DropdownButton id="taille" title="Taille" >
                <Dropdown.Item href="action-1">Ouais</Dropdown.Item>
                <Dropdown.Item href="action-1">Ouais</Dropdown.Item>
                <Dropdown.Item href="action-1">Ouais</Dropdown.Item>
              </DropdownButton>
            </div>
            <h2>Ajouter au panier</h2>
          </div>

      </div>

      // blablibla
  )

  export default ProductPage;
