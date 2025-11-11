// server/api/products/index.js

export default defineEventHandler(async () => {
  try {
    // 🟢 استخدام API بديل مجاني ومفتوح
    const response = await fetch('https://dummyjson.com/products', {
      cache: 'no-store', // منع التخزين المؤقت
    });

    // 🔸 التأكد من نجاح الجلب
    if (!response.ok) {
      throw new Error(`فشل الاتصال: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // 🔸 dummyjson يرجّع كائن فيه key اسمه "products"
    return data.products;
  } catch (error) {
    console.error('❌ خطأ أثناء الجلب:', error);
    return { error: error.message || 'حدث خطأ غير معروف' };
  }
});
