import prisma from '../app/db';

export async function getServerSideProps({ params }) {
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

  const serializedProduct = {
    id: product.id,
    name: product.name,
    desc: product.desc,

  };

  return {
    props: {
      product: serializedProduct,
    },
  };
}

export default function ProductPage({ product }) {
  return (
    <div>
      <h1>{product?.name}</h1>
      {/* Autres détails du produit */}
    </div>
  );
}
