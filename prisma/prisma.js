// lib/prisma.js

import prisma from './prisma';

export const getProductsByPriceIds = async (priceId) => {
  return await prisma.cloth.findMany({
    where: {
      priceId: {
        in: priceId,
      },
    },
  });
};
