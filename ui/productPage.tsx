import Image from 'next/image';
import { useCart } from '../context/CartContext';  // Assurez-vous que le chemin est correct
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from 'react';

const ProductPage = ({ product }: { product: { id: number; size: string[]; name: string; desc: string; price: number, image: string, priceId: string; }}) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name: product.name, priceId: product.priceId, quantity: 1, size: product.size });
  };

  const [selectedSize, setSelectedSize] = useState<string>("Taille")

  const getSize = (size: string) => {
    setSelectedSize(size)
  }

  return (
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
          <DropdownButton id="taille" title={selectedSize} >
            {product.size.map ((size, index) => (
              <Dropdown.Item onClick={() => getSize(size)} key={index}>{size}</Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
        <button id='addToCart' onClick={handleAddToCart}>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default ProductPage;
