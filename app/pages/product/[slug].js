// pages/product/[slug].js
import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Exemple de données statiques pour le produit
  const product = {
    slug: slug,
    name: `Product ${slug}`,
    description: `This is the description for product ${slug}.`,
    price: 100,
  };

  return (
    <div>
      <h1>Product: {product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;
