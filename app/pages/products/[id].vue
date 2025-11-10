<script setup>
import { computed } from 'vue';
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
  // 🚫 لا نستخدم alert هنا — فقط نضيف المنتج بهدوء
};
</script>

<template>
  <div class="product-page">
    <div v-if="loading" class="loading">جاري تحميل البيانات...</div>
    <div v-else-if="fetchError" class="error">حدث خطأ أثناء جلب المنتج 😢</div>

    <div v-else class="product-card">
      <img :src="product?.image" :alt="product?.title" class="product-image" />

      <div class="product-info">
        <h1>{{ product?.title }}</h1>
        <p class="desc">{{ product?.description }}</p>

        <p class="price-original">
          السعر الأصلي: {{ $formatCurrency(product?.price) }}
        </p>
        <p class="price-vat">
          الإجمالي (شامل الضريبة): {{ $formatCurrency(finalPriceWithVAT) }}
        </p>

        <div class="rating-info">
          <span>⭐ {{ product?.internal_rating }}</span>
          <span>({{ product?.internal_reviews }} مراجعة)</span>
        </div>

        <!-- 🎨 الزرين هنا بجانب بعض -->
        <div class="buttons-row">
          <UiBaseButton
            variant="primary"
            class="add-btn"
            @click="addToCartHandler"
          >
            🛒 أضف إلى السلة
          </UiBaseButton>

          <NuxtLink to="/cart" class="go-cart-btn"> عرض السلة → </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #fafafa;
  min-height: 100vh;
  direction: rtl;
  font-family: 'Tajawal', sans-serif;
}

.product-card {
  display: flex;
  gap: 40px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 40px;
  max-width: 900px;
}

.product-image {
  width: 280px;
  height: auto;
  border-radius: 12px;
  object-fit: contain;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

h1 {
  margin: 0;
  color: #222;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
}

.desc {
  color: #555;
  line-height: 1.7;
  font-size: 15px;
  margin-top: 10px;
}

.price-original {
  color: #777;
  font-weight: 400;
  font-size: 15px;
  margin-top: 20px;
}

.price-vat {
  color: #1e8449;
  font-weight: 600;
  font-size: 18px;
  margin-top: 5px;
}

.rating-info {
  margin-top: 10px;
  color: #f1c40f;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
}

/* 🎨 تنسيق الأزرار بجانب بعض */
.buttons-row {
  display: flex;
  gap: 15px;
  margin-top: 25px;
  align-items: center;
}

.add-btn {
  flex: 1;
  background-color: #10b981;
  color: white;
  font-size: 15px;
  padding: 12px;
  border-radius: 10px;
  border: none;
  transition: background 0.2s;
}
.add-btn:hover {
  background-color: #059669;
}

.go-cart-btn {
  flex: 1;
  text-align: center;
  background-color: #3b82f6;
  color: white;
  padding: 12px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s;
}
.go-cart-btn:hover {
  background-color: #2563eb;
}

.loading,
.error {
  font-size: 20px;
  color: #555;
}
</style>
