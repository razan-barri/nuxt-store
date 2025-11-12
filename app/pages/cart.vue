<script setup>
import { onMounted } from 'vue';
import { useCart } from '~/composables/useCart';

const { cart, removeFromCart, addToCart, deleteItem, clearCart, totalPrice } =
  useCart();

/* ✨ حركة الإضاءة الخلفية */
onMounted(() => {
  const blobs = document.querySelectorAll('.blob');
  blobs.forEach((blob) => {
    blob.animate(
      [
        { transform: 'translate(0, 0) scale(1)' },
        { transform: 'translate(60px, -60px) scale(1.2)' },
        { transform: 'translate(-40px, 60px) scale(0.9)' },
        { transform: 'translate(0, 0) scale(1)' },
      ],
      {
        duration: 15000,
        iterations: Infinity,
        direction: 'alternate',
      },
    );
  });
});
</script>

<template>
  <main class="cart-page">
    <!-- 🪩 الخلفية المتوهجة -->
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="blob blob3"></div>

    <h1 class="page-title">🛒 Shopping Cart</h1>

    <!-- 🧺 السلة الفارغة -->
    <div v-if="cart.length === 0" class="empty">
      <p>Your cart is currently empty.</p>
      <NuxtLink to="/products">Shop Now →</NuxtLink>
    </div>

    <!-- 🧥 عند وجود منتجات -->
    <div v-else class="cart-content">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" alt="product" />
        <div class="details">
          <h3>{{ item.title }}</h3>
          <p class="price">${{ item.price }}</p>
          <div class="quantity">
            <button @click="removeFromCart(item.id)">−</button>
            <span>{{ item.quantity }}</span>
            <button @click="addToCart(item)">+</button>
          </div>
        </div>
        <button class="delete" @click="deleteItem(item.id)">🗑️</button>
      </div>

      <!-- 💰 المجموع -->
      <div class="summary">
        <h3>
          Total: <span>${{ totalPrice }}</span>
        </h3>
        <div class="actions">
          <button @click="clearCart" class="clear">Clear Cart</button>
          <button class="checkout">Proceed to Checkout →</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* 🌌 الخلفية العامة */
.cart-page {
  position: relative;
  min-height: 100vh;
  padding: 80px 20px;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  background: #0d0d0d;
  overflow: hidden;
}

/* 🪩 الخلفيات المتوهجة */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.6;
  z-index: 0;
}
.blob1 {
  width: 500px;
  height: 500px;
  background: #4c00ff;
  top: -100px;
  left: -100px;
}
.blob2 {
  width: 400px;
  height: 400px;
  background: #ff00e4;
  bottom: -100px;
  right: -100px;
}
.blob3 {
  width: 350px;
  height: 350px;
  background: #00c3ff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* العنوان */
.page-title {
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(90deg, #4c00ff, #ff00e4, #00c3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 25px rgba(0, 195, 255, 0.3);
  margin-bottom: 3rem;
}

/* 🧺 المحتوى */
.cart-content {
  position: relative;
  z-index: 2;
  max-width: 950px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  padding: 30px;
  box-shadow: 0 0 25px rgba(255, 0, 228, 0.2);
  animation: fadeInUp 1s ease;
}

/* 🧥 كل عنصر */
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}
.cart-item:hover {
  transform: scale(1.02);
  box-shadow: 0 0 15px rgba(0, 195, 255, 0.2);
}

.cart-item img {
  width: 90px;
  height: 90px;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 0 15px rgba(76, 0, 255, 0.25);
}

.details {
  flex: 1;
  text-align: left;
}
.details h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 5px;
}
.details .price {
  font-size: 1rem;
  color: #00c3ff;
  margin-bottom: 8px;
}

/* 🎛️ التحكم بالكمية */
.quantity {
  display: flex;
  align-items: center;
  gap: 10px;
}
.quantity button {
  padding: 6px 14px;
  background: linear-gradient(90deg, #4c00ff, #ff00e4, #00c3ff);
  border: none;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 0, 228, 0.3);
}
.quantity button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(0, 195, 255, 0.5);
}

/* 🗑️ حذف منتج */
.delete {
  background: none;
  border: none;
  font-size: 22px;
  color: #ff4b4b;
  cursor: pointer;
  transition: all 0.3s ease;
}
.delete:hover {
  transform: scale(1.2);
  text-shadow: 0 0 15px #ff4b4b;
}

/* 💰 المجموع */
.summary {
  margin-top: 40px;
  text-align: center;
}
.summary h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 0 0 15px #4c00ff;
}
.summary span {
  color: #00c3ff;
}

/* أزرار العمليات */
.actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}
.actions button {
  padding: 12px 25px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s ease;
  color: white;
}

/* تفريغ السلة */
.clear {
  background: linear-gradient(90deg, #ff4b4b, #ff00a0);
  box-shadow: 0 0 15px rgba(255, 0, 160, 0.4);
}
.clear:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(255, 0, 160, 0.7);
}

/* إتمام الشراء */
.checkout {
  background: linear-gradient(90deg, #4c00ff, #00c3ff, #ff00e4);
  background-size: 200%;
  animation: gradientShift 4s linear infinite;
  box-shadow: 0 0 15px rgba(0, 195, 255, 0.4);
}
.checkout:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(0, 195, 255, 0.7);
}

/* 🛒 حالة السلة الفارغة */
.empty {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  margin-top: 80px;
}
.empty a {
  display: inline-block;
  margin-top: 15px;
  color: #00c3ff;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s;
}
.empty a:hover {
  color: #ff00e4;
  text-shadow: 0 0 10px #ff00e4;
}

/* ✨ Animations */
@keyframes gradientShift {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 200%;
  }
}
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
