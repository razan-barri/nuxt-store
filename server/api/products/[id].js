// server/api/products/[id].js
import { getRouterParam } from 'h3';

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`فشل الاتصال: ${response.status} ${response.statusText}`);
    }

    const product = await response.json();

    // 🔹 نحول شكل البيانات ليتوافق مع واجهة العرض القديمة
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail,
      description: product.description,
      category: product.category,
    };
  } catch (error) {
    console.error('❌ خطأ أثناء جلب المنتج:', error);
    return { error: error.message || 'حدث خطأ غير معروف' };
  }
});
