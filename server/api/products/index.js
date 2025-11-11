// server/api/products/index.js

export default defineEventHandler(async () => {
  try {
    // 🔹 الجلب من الـ API الخارجي مباشرة
    const response = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store', // ⛔ يمنع التخزين المؤقت حتى على Vercel
    });

    // 🔹 لو فشل الجلب لأي سبب
    if (!response.ok) {
      throw new Error(`فشل الاتصال: ${response.status} ${response.statusText}`);
    }

    // 🔹 تحويل النتيجة إلى JSON
    const products = await response.json();

    // 🔹 التحقق أن البيانات مصفوفة فعلًا
    if (!Array.isArray(products)) {
      throw new Error('البيانات غير صحيحة أو غير متوقعة');
    }

    // ✅ نرجع المنتجات بشكل طبيعي
    return products;
  } catch (error) {
    console.error('❌ خطأ أثناء الجلب:', error);
    // نرجّع الخطأ عشان يظهر في الصفحة بدل ما تكون فاضية
    return { error: error.message || 'حدث خطأ غير معروف' };
  }
});
