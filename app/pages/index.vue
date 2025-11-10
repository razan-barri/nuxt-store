<!-- <template>

  <div class="home-page">

    <h1>🛍️ Smart Shop اهلن و سهلن في</h1>

    <p>شوبينق اونلاين و انجووووي بأفضل الأسعار 💛</p>

    <NuxtLink to="/products" class="shop-btn">ابدأ التسوق الآن</NuxtLink>

  </div>

</template>



<style scoped>

.home-page {

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  min-height: 100vh;

  text-align: center;

  background-color: #fafafa;

  font-family: 'Tajawal', sans-serif;

}



.shop-btn {

  margin-top: 20px;

  background: #ff7eb9;

  color: white;

  padding: 12px 25px;

  border-radius: 10px;

  text-decoration: none;

  font-weight: bold;

  transition: 0.3s;

}



.shop-btn:hover {

  background: #ff4d94;

}

</style> -->

<script setup>
// 🚨 لا نحتاج لـ <script setup> هنا لأن الصفحة لا تجلب بيانات ولا تحتاج لمنطق الآن.

// لكن لو كانت الصفحة فارغة، نتركه كما هو
</script>

<template>
  <div class="home-page">
    <h1>🛍️ Smart Shop اهلن و سهلن في</h1>

    <p>شوبينق اونلاين و انجووووي بأفضل الأسعار 💛</p>

    <NuxtLink to="/products" class="shop-link">
      <UiBaseButton variant="primary"> ابدأ التسوق الآن </UiBaseButton>
    </NuxtLink>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  min-height: 100vh;

  text-align: center;

  background-color: #fafafa;

  /* أزلنا الآن تنسيقات .shop-btn لأن <UiBaseButton> يتكفل بها */
}

/* ⚠️ ملاحظة: قمنا بتغيير الكلاس الخارجي لـ <NuxtLink> 

   لأن تنسيق الزر يتم الآن داخل ملف BaseButton.vue 

*/

.shop-link {
  text-decoration: none; /* إزالة خط الرابط الافتراضي */

  margin-top: 20px;
}
</style>
