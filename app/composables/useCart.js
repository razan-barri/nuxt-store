// app/composables/useCart.js

export const useCart = () => {
  // 🧩 الحالة العامة للسلة — Nuxt يخزنها حتى بعد التنقل بين الصفحات
  const cart = useState('cart', () => []);

  // 💾 تحميل السلة المحفوظة في المتصفح عند بداية التشغيل
  if (process.client) {
    const saved = localStorage.getItem('cart');
    if (saved && cart.value.length === 0) {
      cart.value = JSON.parse(saved);
    }
  }

  // 🔁 حفظ السلة في المتصفح بعد كل تعديل
  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart.value));
  };

  // 🛒 إضافة منتج جديد للسلة
  const addToCart = (product) => {
    const existing = cart.value.find((item) => item.id === product.id);

    if (existing) {
      // لو المنتج موجود، نزيد الكمية
      existing.quantity += 1;
    } else {
      // لو أول مرة، نضيفه مع كمية 1
      cart.value.push({ ...product, quantity: 1 });
    }
    saveCart();
  };

  // ➖ تقليل الكمية أو حذف المنتج
  const removeFromCart = (productId) => {
    const index = cart.value.findIndex((item) => item.id === productId);
    if (index !== -1) {
      if (cart.value[index].quantity > 1) {
        cart.value[index].quantity -= 1;
      } else {
        cart.value.splice(index, 1);
      }
      saveCart();
    }
  };

  // ❌ حذف منتج نهائيًا
  const deleteItem = (productId) => {
    cart.value = cart.value.filter((item) => item.id !== productId);
    saveCart();
  };

  // 💰 حساب الإجمالي
  const totalPrice = computed(() => {
    return cart.value.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  });

  // 🧹 تفريغ السلة
  const clearCart = () => {
    cart.value = [];
    saveCart();
  };

  // نرجع كل الدوال عشان نستخدمها في الصفحات
  return { cart, addToCart, removeFromCart, deleteItem, clearCart, totalPrice };
};
