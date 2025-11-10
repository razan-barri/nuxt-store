// app/composables/useProduct.js

/**
 * Composable لجلب بيانات منتج واحد بناءً على معرف المنتج (ID) الحالي في المسار.
 */
export const useProduct = () => {
  // 1. استخدام useRoute (هو نفسه Composable) للحصول على الـ ID
  const route = useRoute();
  const id = route.params.id;

  // 2. استخدام useFetch لجلب البيانات من الـ API الداخلي
  // نستخدم await هنا لأننا سنستخدمه في صفحة تستخدم <script setup async>
  const { data, pending, error, refresh } = useFetch(`/api/products/${id}`, {
    // key: مفتاح ضروري لـ Nuxt لإدارة الكاش وتحديث البيانات
    key: `product-${id}`,
  });

  // 3. نُرجع الحالة والبيانات
  return {
    product: data,
    loading: pending,
    fetchError: error,
    refresh, // وظيفة لإعادة جلب البيانات يدوياً
  };
};
