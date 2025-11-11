// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@/assets/main.css'],

  nitro: {
    preset: 'vercel', // ✅ خليه يستخدم الإعداد المدمج في Nuxt لـ Vercel
    serveStatic: true,
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
});
