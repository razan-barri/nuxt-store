<template>
  <header class="main-header">
    <NuxtLink to="/" class="logo"> Smart Shop 🛍️ </NuxtLink>

    <nav class="nav-links">
      <NuxtLink to="/index" class="nav-item">المنتجات</NuxtLink>
      <NuxtLink to="/products" class="nav-item">المنتجات</NuxtLink>
      <NuxtLink to="/cart" class="nav-item">سلة التسوق</NuxtLink>
      <NuxtLink to="/about" class="nav-item">من نحن</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* ظل خفيف */
}
.logo {
  font-size: 1.6rem;
  font-weight: bold;
  color: #10b981; /* لون علامتك التجارية */
  text-decoration: none;
}
.nav-links {
  display: flex;
  gap: 25px;
}
.nav-item {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  padding: 5px 0;
}
.nav-item:hover {
  color: #059669;
}
/* تنسيق خاص لتحديد الصفحة النشطة (التي أنت عليها حالياً) */
.router-link-active,
.router-link-exact-active {
  color: #059669;
  border-bottom: 2px solid #059669;
}
</style>
