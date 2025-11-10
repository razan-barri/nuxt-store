// server/api/products/index.js

import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {
  try {
    const products = await $fetch('https://fakestoreapi.com/products');
    return products;
  } catch (error) {
    return { error: 'حدث خطأ أثناء جلب المنتجات 😢' };
  }
});
