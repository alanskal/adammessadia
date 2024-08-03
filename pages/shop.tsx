import prisma from '../db';
import ShopPage from '../ui/ShopPage'; // Assurez-vous d'avoir un composant pour afficher une liste de produits

export async function getServerSideProps() {
  // Récupérer tous les produits de la base de données
  const products = await prisma.cloth.findMany();

  // Sérialiser les produits pour éviter les données sensibles
  const serializedProducts = products.map(product => ({
    id: product.id,
    name: product.name,
    desc: product.desc,
    price: product.price,
    image: product.imageUrl, // Assurez-vous que cette propriété existe et est correcte
  }));

  // Retourner les produits sérialisés en tant que props
  return {
    props: {
      products: serializedProducts,
    },
  };
}

// Définir le type des props et passer les produits sérialisés à ProductList
const ShowAllProducts = ({ products }: { products: { id: number; name: string; desc: string; price: number, image: string; }[] }) => (
  <div>
    <ShopPage products={products} />
  </div>
);

export default ShowAllProducts;
