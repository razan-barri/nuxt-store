<script setup>
import { computed, onMounted } from 'vue';
import { useProduct } from '~/composables/useProduct';
import { useCart } from '~/composables/useCart';

const { product, loading, fetchError } = useProduct();
const { addToCart } = useCart();

const finalPriceWithVAT = computed(() => {
  return calculateVAT(product.value?.price || 0);
});

const addToCartHandler = () => {
  if (!product.value) return;
  addToCart(product.value);
};

/* ✨ حركة الإضاءة في الخلفية */
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
  <main class="product-page">
    <!-- 🪩 خلفية الإضاءة -->
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="blob blob3"></div>

    <div v-if="loading" class="loading">Loading product...</div>
    <div v-else-if="fetchError" class="error">❌ Failed to load product</div>

    <div v-else class="product-card">
      <img :src="product?.image" :alt="product?.title" class="product-image" />

      <div class="product-info">
        <h1>{{ product?.title }}</h1>
        <p class="desc">{{ product?.description }}</p>

        <div class="price-section">
          <p class="price-original">
            Original Price:
            <span class="value">${{ product?.price }}</span>
          </p>
          <p class="price-vat">
            With VAT:
            <span class="value">${{ finalPriceWithVAT.toFixed(2) }}</span>
          </p>
        </div>

        <div class="rating-info">
          <span>⭐ {{ product?.internal_rating }}</span>
          <span>({{ product?.internal_reviews }} Reviews)</span>
        </div>

        <div class="buttons-row">
          <button class="add-btn" @click="addToCartHandler">
            🛒 Add to Cart
          </button>
          <NuxtLink to="/cart" class="go-cart-btn">Go to Cart →</NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* ✨ خلفية الموقع */
.product-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
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

/* ✨ البطاقة */
.product-card {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  padding: 40px;
  max-width: 950px;
  backdrop-filter: blur(12px);
  box-shadow: 0 0 25px rgba(255, 0, 228, 0.2);
  z-index: 2;
  transition: all 0.4s ease;
}
.product-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 40px rgba(0, 195, 255, 0.3);
}

/* ✨ الصورة */
.product-image {
  width: 320px;
  height: 320px;
  border-radius: 20px;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.08);
  padding: 15px;
  box-shadow: 0 0 25px rgba(76, 0, 255, 0.3);
  transition: transform 0.3s ease;
}
.product-image:hover {
  transform: scale(1.05) rotate(1deg);
}

/* ✨ النصوص */
.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1 {
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  text-shadow: 0 0 10px #4c00ff, 0 0 20px #00c3ff;
  margin-bottom: 10px;
}
.desc {
  color: #ddd;
  line-height: 1.8;
  font-size: 1rem;
  margin-top: 10px;
  max-width: 600px;
}
.price-section {
  margin-top: 20px;
}
.price-original,
.price-vat {
  font-weight: 600;
  margin-bottom: 5px;
}
.value {
  color: #00c3ff;
  font-weight: 700;
}
.price-vat .value {
  color: #ff00e4;
}

/* ✨ التقييم */
.rating-info {
  margin-top: 15px;
  color: #ffdc64;
  font-weight: 600;
  display: flex;
  gap: 6px;
  align-items: center;
}

/* ✨ الأزرار */
.buttons-row {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}
.add-btn {
  flex: 1;
  background: linear-gradient(90deg, #4c00ff, #ff00e4, #00c3ff);
  background-size: 200%;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 30px;
  padding: 12px;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(255, 0, 228, 0.3);
  transition: all 0.4s ease;
  animation: gradientShift 4s linear infinite;
}
.add-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(0, 195, 255, 0.7);
}
.go-cart-btn {
  flex: 1;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 12px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}
.go-cart-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
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
</style>
