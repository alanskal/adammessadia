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

    };

    // retourne les props
    return {
      props: {
        product: serializedProduct,
      },
    };
  }

  // définis le type de props
  // Appelle le composant Show avec les props
const Show = ({ product }: { product: { id: number; name: string; desc: string; price: number; } }) => (
  <div>
    <ProductPage product={product} />
  </div>
);

export default Show;
