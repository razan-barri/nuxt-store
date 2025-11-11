// server/api/products/index.js
export default defineEventHandler(async () => {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000); // ⏳ مهلة 15 ثانية يدوية

    const response = await fetch('https://fakestoreapi.com/products', {
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const products = await response.json();
    return products;
  } catch (error) {
    console.error('API Fetch Failed on Vercel:', error);
    return [];
  }
});
