// // server/api/products/index.js

// import { defineEventHandler } from 'h3';

// export default defineEventHandler(async () => {
//   try {
//     const products = await $fetch('https://fakestoreapi.com/products');
//     return products;
//   } catch (error) {
//     return { error: 'حدث خطأ أثناء جلب المنتجات 😢' };
//   }
// });

// server/api/products/index.js

import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {
  try {
    const products = await $fetch('https://fakestoreapi.com/products');
    return products;
  } catch (error) {
    // 🛑 التعديل هنا: نُرجع مصفوفة فارغة بدلاً من كائن خطأ.
    // هذا يمنع تعطل أو تشوه الواجهة الأمامية التي تتوقع Array.
    console.error('API Fetch Failed on Vercel:', error);
    return [];
  }
});
