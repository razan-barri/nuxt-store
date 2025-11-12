<script setup>
import { onMounted } from 'vue';

/* 🔹 حركة الإضاءة في الخلفية */
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

/* 🔹 صور ثابتة للمنتجات */
const productImages = [
  'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1520975918311-7ce9c3e06b43?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
];
</script>

<template>
  <main class="home-page">
    <!-- 🪩 خلفية الإضاءة -->
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="blob blob3"></div>

    <!-- 🌟 HERO SECTION -->
    <section class="hero">
      <div class="hero-content">
        <h1>Redefine Your Style.</h1>
        <p>Discover the latest fashion trends for men & women.</p>
        <NuxtLink to="/products" class="cta">Shop Now →</NuxtLink>
      </div>
    </section>

    <!-- 👕 FEATURED CATEGORIES -->
    <section class="categories">
      <h2 class="section-title">Shop by Category</h2>
      <div class="category-grid">
        <div class="category-card">
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80"
            alt="Men"
          />
          <div class="overlay"><h3>Men</h3></div>
        </div>

        <div class="category-card">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
            alt="Women"
          />
          <div class="overlay"><h3>Women</h3></div>
        </div>

        <div class="category-card">
          <img
            src="https://images.unsplash.com/photo-1600180758890-6c4cf7c6b33a?auto=format&fit=crop&w=800&q=80"
            alt="Accessories"
          />
          <div class="overlay"><h3>Accessories</h3></div>
        </div>
      </div>
    </section>

    <!-- 🛍️ POPULAR PRODUCTS -->
    <section class="products-preview">
      <h2 class="section-title">Popular Now</h2>
      <div class="product-grid">
        <div class="product-card" v-for="(img, i) in productImages" :key="i">
          <img :src="img" alt="product" />
          <h3>Stylish Outfit {{ i + 1 }}</h3>
          <p>$49.99</p>
          <NuxtLink to="/products" class="btn-view">View Details</NuxtLink>
        </div>
      </div>

      <NuxtLink to="/products" class="cta-secondary">
        View All Products →
      </NuxtLink>
    </section>
  </main>
</template>

<style scoped>
/* 🌌 الخلفية العامة */
.home-page {
  position: relative;
  background: #0d0d0d;
  color: #fff;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
}

/* 🪩 الإضاءة الخلفية */
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

/* 🌟 HERO SECTION */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  padding: 0 20px;
}
.hero-content {
  max-width: 800px;
  animation: fadeInUp 1.2s ease forwards;
}
.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  background: linear-gradient(90deg, #4c00ff, #ff00e4, #00c3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
}
.hero p {
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 40px;
}

/* 🎨 CTA */
.cta {
  display: inline-block;
  background: linear-gradient(90deg, #4c00ff, #ff00e4, #00c3ff);
  background-size: 200%;
  color: white;
  padding: 14px 35px;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.4s ease;
  animation: gradientShift 4s linear infinite;
  box-shadow: 0 0 25px rgba(255, 0, 228, 0.2);
}
.cta:hover {
  transform: scale(1.05);
  box-shadow: 0 0 35px rgba(0, 195, 255, 0.4);
}

/* 👕 CATEGORIES */
.categories {
  padding: 100px 20px;
  text-align: center;
}
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #4c00ff, #ff00e4, #00c3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 60px;
}
.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}
.category-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.4s ease;
  min-height: 350px;
  display: flex;
  align-items: stretch;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  flex-grow: 1;
  transition: transform 0.5s ease;
}
.category-card:hover img {
  transform: scale(1.1);
}
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 25px;
  color: #fff;
}
.overlay h3 {
  font-size: 1.6rem;
  font-weight: 700;
}

/* 🛍️ PRODUCTS */
.products-preview {
  padding: 100px 20px;
  text-align: center;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto 60px;
}
.product-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  padding: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 195, 255, 0.15);
}
.product-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 0 25px rgba(255, 0, 228, 0.3);
}
.product-card img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 10px;
}
.product-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 10px 0;
}
.product-card p {
  color: #00c3ff;
  font-weight: 700;
  margin-bottom: 10px;
}
.btn-view {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}
.btn-view:hover {
  color: #ff00e4;
  text-shadow: 0 0 10px #ff00e4;
}
.cta-secondary {
  display: inline-block;
  color: #00c3ff;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}
.cta-secondary:hover {
  color: #ff00e4;
  text-shadow: 0 0 10px #ff00e4;
}

/* ✨ ANIMATIONS */
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
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
