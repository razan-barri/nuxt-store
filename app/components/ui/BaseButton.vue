<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // أنواع: primary / secondary / danger
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
  position: relative;
  display: inline-block;
  padding: 12px 28px;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  color: #fff;
  text-transform: capitalize;
  letter-spacing: 0.5px;
}

/* ✨ الزر الأساسي (نيوني متدرّج) */
.primary {
  background: linear-gradient(90deg, #4c00ff, #ff00e4, #00c3ff);
  background-size: 200%;
  animation: gradientShift 4s linear infinite;
  box-shadow: 0 0 15px rgba(255, 0, 228, 0.3);
}

.primary:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(0, 195, 255, 0.6);
}

/* 💜 الزر الثانوي */
.secondary {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
}

.secondary:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* 💥 الزر الخطر (اختياري) */
.danger {
  background: linear-gradient(90deg, #ff4b4b, #ff00a0);
  box-shadow: 0 0 15px rgba(255, 0, 160, 0.3);
}

.danger:hover {
  box-shadow: 0 0 25px rgba(255, 0, 160, 0.6);
  transform: scale(1.05);
}

/* ✨ حركة تدرج الخلفية */
@keyframes gradientShift {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 200%;
  }
}
</style>
