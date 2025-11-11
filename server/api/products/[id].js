// server/api/products/[id].js
import { getRouterParam, createError, defineEventHandler } from 'h3';

// ------------------- (1) مصدر بيانات داخلي ثابت (لغرض الدمج) -------------------
// في الواقع، يمكن أن تكون هذه البيانات قادمة من قاعدة بياناتك الداخلية
const internalRatings = {
  // تقييمات داخلية وهمية
  1: { rating: 4.5, reviewCount: 150 },
  2: { rating: 4.0, reviewCount: 88 },
  3: { rating: 4.8, reviewCount: 210 }, // والمزيد...
};
// -----------------------------------------------------------------------------------

export default defineEventHandler(async (event) => {
  const productId = getRouterParam(event, 'id');

  if (!productId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Product ID is required',
    });
  } // A. الجلب من الـ API الخارجي

  const externalProduct = await $fetch(
    `https://fakestoreapi.com/products/${productId}`,
  ); // B. الحصول على البيانات من المصدر الداخلي

  const internalData = internalRatings[productId] || {
    rating: 3.5,
    reviewCount: 5,
  }; // C. الدمج الحقيقي! (Combining)

  const combinedProduct = {
    // البيانات الأساسية من API الخارجي
    ...externalProduct, // إضافة العملة (معالجة)

    currency: 'ريال', // دمج البيانات الداخلية الجديدة (Ratings)

    internal_rating: internalData.rating,
    internal_reviews: internalData.reviewCount,
  }; // إرجاع المنتج المدمج من المصدرين

  return combinedProduct;
});
