<template>
  <div class="products-page">
    <h1>🛍️ قائمة المنتجات</h1>

    <!-- 🔸 أثناء التحميل -->
    <div v-if="pending" class="loading">جاري تحميل المنتجات...</div>

    <!-- 🔸 لو فشل الجلب -->
    <div v-else-if="error" class="error">تعذر تحميل المنتجات 😢</div>

    <!-- 🔸 لو في رسالة خطأ من الـ API -->
    <div v-else-if="products?.error">
      <p style="color: red; font-weight: 600">
        ⚠️ خطأ من السيرفر: {{ products.error }}
      </p>
    </div>

    <!-- 🔸 عرض المنتجات -->
    <div v-else class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.title" />
        <h2>{{ product.title }}</h2>
        <p class="price">{{ product.price }} $</p>
        <UiBaseButton
          variant="primary"
          @click="navigateTo(`/products/${product.id}`)"
        >
          عرض التفاصيل
        </UiBaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
// 🔹 جلب المنتجات من الـ API الداخلي
const { data: products, pending, error } = await useFetch('/api/products');
</script>

<style scoped>
.products-page {
  padding: 2rem;
  text-align: center;
  background-color: #f8f8f8;
}

/* شبكة المنتجات */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

/* كرت المنتج */
.product-card {
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.product-card img {
  width: 100%;
  height: 220px;
  object-fit: contain;
}

.product-card h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #333;
}

.price {
  font-weight: bold;
  color: #098169;
}
</style>
