// server/api/products/index.js

import { defineEventHandler } from 'h3';
// ⚠️ لا حاجة لاستيراد Fetch هنا في Nuxt 3، لكن يمكن استخدام الخصائص المتقدمة.

export default defineEventHandler(async (event) => {
  try {
    // استخدام Fetch الأصلي (الذي تستخدمه Nuxt في النهاية) مع إضافة مهلة مباشرة
    const response = await fetch('https://fakestoreapi.com/products', {
      signal: AbortSignal.timeout(15000), // تحديد مهلة 15 ثانية باستخدام AbortSignal
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch from external API: ${response.statusText}`,
      );
    }

    const products = await response.json();
    return products;
  } catch (error) {
    // تسجيل الخطأ وإرجاع مصفوفة فارغة
    console.error('Final attempt API Fetch Failed on Vercel:', error);
    return [];
  }
});
