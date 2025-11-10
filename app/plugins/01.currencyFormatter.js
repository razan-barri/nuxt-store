// // app/plugins/01.currencyFormatter.js

// // يجب استخدام defineNuxtPlugin (مستوردة تلقائياً)
// export default defineNuxtPlugin(() => {
//   // 1. الدالة التي تقوم بالتنسيق الفعلي
//   const formatCurrency = (amount) => {
//     // تنسيق العملة للريال السعودي (SAR) باستخدام أداة JavaScript المدمجة
//     return new Intl.NumberFormat('ar-SA', {
//       style: 'currency',
//       currency: 'SAR',
//     }).format(amount);
//   };

//   // 2. حقن الدالة في Vue لتصبح متاحة عالمياً كـ $formatCurrency
//   return {
//     provide: {
//       formatCurrency: formatCurrency,
//     },
//   };
// });

// app/plugins/01.currencyFormatter.js

export default defineNuxtPlugin(() => {
  const formatCurrency = (amount) => {
    // التأكد من أن 'SAR' و 'currency' مكتوبان بشكل صحيح
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR',
    }).format(amount);
  };

  // تأكد من أن هذا الجزء موجود ودقيق
  return {
    provide: {
      formatCurrency: formatCurrency,
    },
  };
}); // 🚨 تأكد من وجود قوس الإغلاق هذا
