import prisma from '../db';
import ProductPage from '../ui/productPage';

  export async function getServerSideProps({ params }: { params: { productId: string } }) {
    const { productId } = params;


    const product = await prisma.cloth.findFirst({
      where: {
        id: Number(productId),
      },
    });

    if (!product) {
      return {
        notFound: true,
      };
    }

  // sérialisation pour éviter de passer des données sensibles
    const serializedProduct = {
      id: product.id,
      name: product.name,
      desc: product.desc,
      price: product.price,
      image: product.imageUrl,
      priceId: product.priceId

    };

    // retourne le produit sérialisé en tant que props
    return {
      props: {
        product: serializedProduct,
      },
    };
  }

  // définis le type de props, ici un objet avec une clé product qui est un objet avec les clés id, name, desc et price
  // Passe le produit sérialisé à ProductPage
const Show = ({ product }: { product: { id: number; name: string; desc: string; price: number, image: string, priceId: string; } }) => (
  <div>
    <ProductPage product={product} />
  </div>
);

export default Show;
