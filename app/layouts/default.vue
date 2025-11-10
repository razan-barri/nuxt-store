<template>
  <div class="site-container">
    <SharedAppHeader />

    <main class="page-content">
      <slot />
    </main>

    <SharedAppFooter />
  </div>
</template>

<script setup>
// لا نحتاج لشيء هنا، المكونات مستوردة تلقائياً
</script>

<style scoped>
.site-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.page-content {
  flex-grow: 1; /* يجعل المحتوى يملأ الفراغ لدفع الفوتر للأسفل */
  padding: 20px 0;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto; /* توسيط المحتوى */
}
</style>
