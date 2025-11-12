<script setup>
import { onMounted } from 'vue';

/* ✨ حركة الإضاءة بالخلفية */
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

/* 🔹 جلب المنتجات */
const { data: products, pending, error } = await useFetch('/api/products');
</script>

<template>
  <main class="products-page">
    <!-- خلفيات الإضاءة -->
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="blob blob3"></div>

    <!-- العنوان -->
    <h1 class="page-title">🛍️ Our Collection</h1>

    <!-- الحالات -->
    <div v-if="pending" class="loading">Loading products...</div>
    <div v-else-if="error" class="error">❌ Failed to load products.</div>
    <div v-else-if="products?.error" class="error">
      ⚠️ API Error: {{ products.error }}
    </div>

    <!-- المنتجات -->
    <div v-else class="products-grid">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
        @click="navigateTo(`/products/${product.id}`)"
      >
        <img :src="product.image" :alt="product.title" />
        <h2>{{ product.title }}</h2>
        <p class="price">${{ product.price }}</p>
        <UiBaseButton variant="primary">View Details</UiBaseButton>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* ✨ الخلفية العامة بنفس هوية index.vue */
.products-page {
  position: relative;
  min-height: 100vh;
  padding: 5rem 2rem;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  background: #0d0d0d;
}

/* 🪩 الإضاءة المتوهجة */
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
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(90deg, #4c00ff, #ff00e4, #00c3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 25px rgba(0, 195, 255, 0.3);
  margin-bottom: 3rem;
  animation: fadeInDown 1.2s ease;
}

/* حالة التحميل والخطأ */
.loading,
.error {
  text-align: center;
  font-size: 1.2rem;
  color: #ccc;
  animation: fadeIn 1s ease;
  z-index: 2;
}

/* شبكة المنتجات */
.products-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeInUp 1s ease;
}

/* بطاقة المنتج */
.product-card {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(0, 195, 255, 0.15);
  transition: all 0.4s ease;
  cursor: pointer;
  overflow: hidden;
}

/* تأثير لمعة تمر فوق الكرت */
.product-card::before {
  content: '';
  position: absolute;
  top: -100%;
  left: -50%;
  width: 200%;
  height: 300%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transform: skewX(-20deg);
  transition: 0.6s;
  opacity: 0;
}
.product-card:hover::before {
  opacity: 1;
  top: 0;
}
.product-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 0 30px rgba(255, 0, 228, 0.3);
}

/* الصور */
.product-card img {
  width: 100%;
  height: 220px;
  object-fit: contain;
  border-radius: 10px;
  transition: transform 0.5s ease;
}
.product-card:hover img {
  transform: scale(1.1);
}

/* النصوص */
.product-card h2 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0.8rem 0;
  color: #fff;
}
.price {
  font-weight: 700;
  color: #00c3ff;
  margin-bottom: 1rem;
}

/* زر التفاصيل */
.product-card button {
  background: linear-gradient(90deg, #4c00ff, #ff00e4, #00c3ff);
  background-size: 200%;
  color: #fff;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 0 15px rgba(255, 0, 228, 0.3);
}
.product-card button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(0, 195, 255, 0.5);
}

/* ✨ Animations */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
