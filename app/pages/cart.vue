<script setup>
import { useCart } from '~/composables/useCart';

const { cart, removeFromCart, addToCart, deleteItem, clearCart, totalPrice } =
  useCart();
</script>

<template>
  <div class="cart-page">
    <h1>🛒 سلة المشتريات</h1>

    <!-- لو السلة فاضية -->
    <div v-if="cart.length === 0" class="empty">
      <p>السلة فارغة حاليًا</p>
      <NuxtLink to="products">تصفح المنتجات</NuxtLink>
    </div>

    <!-- لو فيها منتجات -->
    <div v-else class="cart-items">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" alt="product" />
        <div class="details">
          <h3>{{ item.title }}</h3>
          <p>{{ item.price }} ريال</p>
          <div class="quantity">
            <button @click="removeFromCart(item.id)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="addToCart(item)">+</button>
          </div>
        </div>
        <button class="delete" @click="deleteItem(item.id)">🗑️</button>
      </div>

      <div class="summary">
        <h3>الإجمالي: {{ totalPrice }} ريال</h3>
        <div class="actions">
          <button @click="clearCart">تفريغ السلة</button>
          <button class="checkout">إتمام الشراء ✅</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.empty {
  text-align: center;
  color: #555;
}
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eee;
}
.cart-item img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}
.details {
  flex: 1;
  margin-left: 15px;
}
.quantity {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
}
.quantity button {
  padding: 4px 10px;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.quantity button:hover {
  background-color: #059669;
}
.delete {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #ef4444;
}
.summary {
  text-align: center;
  margin-top: 30px;
}
.actions {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
}
.actions button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.actions button:first-child {
  background-color: #ef4444;
  color: white;
}
.checkout {
  background-color: #3b82f6;
  color: white;
}
.checkout:hover {
  background-color: #2563eb;
}
</style>
