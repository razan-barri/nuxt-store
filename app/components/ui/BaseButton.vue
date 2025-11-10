<script setup>
const props = defineProps({
  // نوع الزر (مثل primary, danger)
  variant: {
    type: String,
    default: 'primary',
  },
});
</script>

<template>
  <button :class="['base-button', variant]">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;
  font-weight: 600;
}
.primary {
  background-color: #10b981; /* أخضر */
  color: white;
}
.primary:hover {
  background-color: #059669;
}
</style>
