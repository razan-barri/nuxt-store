// app/utils/priceCalculations.js

/**
 * دالة نقية لحساب السعر الإجمالي بعد إضافة ضريبة القيمة المضافة (VAT).
 * تُستخدم فقط داخل <script setup> في أي ملف.
 */
export const calculateVAT = (basePrice) => {
  // ضريبة القيمة المضافة (15%)
  const VAT_RATE = 0.15;

  if (typeof basePrice !== 'number' || basePrice < 0) {
    // إرجاع 0 إذا كان المدخل غير صحيح
    return 0;
  }

  const priceWithVAT = basePrice * (1 + VAT_RATE);

  // نُرجع السعر النهائي
  return priceWithVAT;
};
