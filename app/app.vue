<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// يمكنك هنا إضافة بعض الإعدادات الأساسية لعنوان الصفحة
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Smart Shop 🛍️`
      : 'Smart Shop - أفضل تجربة تسوق';
  },
});
</script>
