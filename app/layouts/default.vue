<template>
  <div class="site-container">
    <SharedAppHeader />

    <main class="page-content" :class="{ 'full-width': $route.path === '/' }">
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
  margin: 0;
  padding: 0;
}
.page-content {
  flex-grow: 1;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
}
</style>
