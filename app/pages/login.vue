<script setup>
import { useAuth } from '~/composables/useAuth';
import { ref } from 'vue';
import { useRouter } from '#app';

const { login } = useAuth();
const router = useRouter();

// 🧩 المتغيرات اللي تمثل الفورم
const email = ref('');
const password = ref('');
const errorMsg = ref('');
const loading = ref(false);

// 🚀 دالة تسجيل الدخول
const handleLogin = () => {
  try {
    loading.value = true;
    login(email.value, password.value); // من useAuth
    router.push('/'); // بعد النجاح، نرجع المستخدم للصفحة الرئيسية
  } catch (error) {
    errorMsg.value = error.message; // رسالة الخطأ من useAuth
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="login-page">
    <h2>تسجيل الدخول</h2>

    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label>البريد الإلكتروني:</label>
        <input type="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label>كلمة المرور:</label>
        <input type="password" v-model="password" required />
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? 'جاري الدخول...' : 'تسجيل الدخول' }}
      </button>

      <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
    </form>

    <p class="note">
      ليس لديك حساب؟ <NuxtLink to="/signup">سجل الآن</NuxtLink>
    </p>
  </div>
</template>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background-color: #059669;
}
.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
.note {
  text-align: center;
  margin-top: 15px;
}
</style>
