// nuxt.config.ts
export default defineNuxtConfig({
  // 🧩 ملف التنسيقات الأساسي
  css: ['@/assets/main.css'],

  // ⚙️ إعداد Nitro لاستخدام بيئة Node بدل Edge
  nitro: {
    preset: 'node-server', // ✅ يجبر Vercel تستخدم Node runtime
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
});
