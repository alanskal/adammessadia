// lib/prisma.js

import prisma from './prisma'; // Assure-toi du bon chemin

export const getProductsByPriceIds = async (priceId) => {
  return await prisma.product.findMany({
    where: {
      priceId: {
        in: priceId,
      },
    },
  });
};
