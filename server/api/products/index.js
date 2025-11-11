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

// server/api/products/index.js

import { defineEventHandler } from 'h3';

export default defineEventHandler(async () => {
  try {
    // 🚨 التعديل هنا: إضافة مهلة Timeout مباشرة لـ $fetch الخارجي
    // لضمان أن Nuxt لا ينتظر إلى الأبد. 15000ms = 15 ثانية.
    const products = await $fetch('https://fakestoreapi.com/products', {
      timeout: 15000,
    });
    return products;
  } catch (error) {
    // نرجع مصفوفة فارغة لضمان عدم تعطل الواجهة الأمامية
    console.error('API Fetch Failed on Vercel:', error);
    return [];
  }
});
