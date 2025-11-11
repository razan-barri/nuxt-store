// nuxt.config.ts
export default defineNuxtConfig({
  // 🧩 ربط ملف التنسيقات
  css: ['@/assets/main.css'],

  // ⚙️ تفعيل nitro على Node runtime (وليس Edge)
  nitro: {
    preset: 'vercel',
    serveStatic: true,
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
});
