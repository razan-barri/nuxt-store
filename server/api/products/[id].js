// server/api/products/[id].js
import { getRouterParam, createError, defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const productId = getRouterParam(event, 'id');

  if (!productId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Product ID is required',
    });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 ثانية مهلة

  try {
    // جلب المنتج من الـ API الخارجي مع تطبيق المهلة
    const externalProduct = await fetch(
      `https://fakestoreapi.com/products/${productId}`,
      {
        signal: controller.signal, // تطبيق المهلة
      },
    );

    clearTimeout(timeoutId); // إلغاء المهلة عند النجاح

    if (!externalProduct.ok) {
      throw new Error(`External API failed: ${externalProduct.statusText}`);
    }

    const productJson = await externalProduct.json();
    return productJson;
  } catch (error) {
    clearTimeout(timeoutId); // إلغاء المهلة عند الفشل
    throw createError({
      statusCode: 503,
      statusMessage: `Failed to fetch product ${productId}: ${error.message}`,
    });
  }
});
