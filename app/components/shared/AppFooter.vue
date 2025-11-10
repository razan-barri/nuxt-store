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
  background-color: #2c3e50; /* لون داكن */
  color: #ecf0f1; /* نص فاتح */
  padding: 30px 50px 15px;
  border-top: 5px solid #10b981;
  width: 100%;
  height: 100%;
}
.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 1px solid #4a637d;
}
.footer-section {
  margin: 15px;
  min-width: 200px;
}
.footer-section h3 {
  color: #10b981;
  margin-bottom: 15px;
  font-size: 1.2rem;
}
.footer-link,
.footer-section p {
  display: block;
  color: #bdc3c7;
  text-decoration: none;
  margin-bottom: 8px;
  transition: color 0.2s;
}
.footer-link:hover {
  color: #ffffff;
}
.copyright {
  text-align: center;
  margin-top: 15px;
  font-size: 0.9rem;
  color: #95a5a6;
}
</style>
