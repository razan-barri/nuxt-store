// server/api/products/index.js

export default defineEventHandler(async () => {
  try {
    const response = await fetch('https://dummyjson.com/products', {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`فشل الاتصال: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // 🔹 تحويل شكل البيانات لتطابق الشكل القديم (image/title/price/description)
    const products = data.products.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.thumbnail, // 🟢 بدل image
      description: item.description, // 🟢 للوصف
    }));

    return products;
  } catch (error) {
    console.error('❌ خطأ أثناء الجلب:', error);
    return { error: error.message || 'حدث خطأ غير معروف' };
  }
});
