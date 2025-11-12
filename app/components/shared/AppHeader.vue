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
  position: fixed; /* يثبت الهيدر فوق */
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  z-index: 100;
  backdrop-filter: blur(10px); /* تأثير الزجاج */
  background: rgba(255, 255, 255, 0.05); /* شفاف خفيف */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 10px rgba(76, 0, 255, 0.2); /* لمسة توهج بنفسجي */
}

/* الشعار */
.logo {
  font-size: 1.8rem;
  font-weight: 800;
  text-decoration: none;
  background: linear-gradient(90deg, #00c3ff, #ff00e4, #4c00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glowText 4s ease-in-out infinite alternate;
}

/* توهج بسيط متدرّج في الشعار */
@keyframes glowText {
  0% {
    text-shadow: 0 0 10px rgba(0, 195, 255, 0.4);
  }
  100% {
    text-shadow: 0 0 20px rgba(255, 0, 228, 0.6);
  }
}

/* روابط التنقل */
.nav-links {
  display: flex;
  gap: 30px;
}
.nav-item {
  position: relative;
  color: #f5f5f5;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}
.nav-item:hover {
  color: #ff00e4;
  text-shadow: 0 0 8px #ff00e4;
}

/* الخط السفلي عند الصفحة النشطة */
.router-link-active,
.router-link-exact-active {
  color: #00c3ff;
  font-weight: 600;
}
</style>
