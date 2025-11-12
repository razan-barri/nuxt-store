<template>
  <footer class="main-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>روابط سريعة</h3>
        <NuxtLink to="/faq" class="footer-link">الأسئلة الشائعة</NuxtLink>
        <NuxtLink to="/terms" class="footer-link">شروط الخدمة</NuxtLink>
        <NuxtLink to="/privacy" class="footer-link">سياسة الخصوصية</NuxtLink>
      </div>

      <div class="footer-section">
        <h3>اتصل بنا</h3>
        <p>البريد الإلكتروني: info@smartshop.com</p>
        <p>الهاتف: 96650xxxxxx</p>
      </div>
    </div>

    <div class="copyright">
      &copy; {{ new Date().getFullYear() }} Smart Shop. جميع الحقوق محفوظة.
    </div>
  </footer>
</template>

<script setup>
// لا يوجد منطق هنا، فقط عرض ثابت
</script>

<style scoped>
.main-footer {
  position: relative;
  width: 100%;
  padding: 40px 60px 20px;
  color: #f5f5f5;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 -2px 10px rgba(76, 0, 255, 0.2);
  overflow: hidden;
}

/* ✨ تأثير لمعة متحركة خفيفة في الخلفية */
.main-footer::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle at center,
    rgba(76, 0, 255, 0.08),
    transparent 60%
  );
  animation: footerGlow 12s linear infinite;
}
@keyframes footerGlow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ✅ المحتوى الداخلي */
.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 20px;
  position: relative;
  z-index: 2;
}

/* ✴️ العناوين */
.footer-section h3 {
  background: linear-gradient(90deg, #00c3ff, #ff00e4, #4c00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

/* 🔗 الروابط والنصوص */
.footer-link,
.footer-section p {
  display: block;
  color: #cfcfcf;
  text-decoration: none;
  margin-bottom: 8px;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}
.footer-link:hover {
  color: #ff00e4;
  text-shadow: 0 0 10px #ff00e4;
}

/* ⚡ النص السفلي */
.copyright {
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
  color: #999;
  z-index: 2;
  position: relative;
}
</style>
