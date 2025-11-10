<script setup>
import { ref } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { useRouter } from '#app';

const { signUp } = useAuth();
const router = useRouter();

// 🧩 المتغيرات اللي نربطها بالفورم
const name = ref('');
const email = ref('');
const password = ref('');
const errorMsg = ref('');
const loading = ref(false);

// 🚀 دالة التسجيل
const handleSignup = () => {
  try {
    loading.value = true;
    signUp(name.value, email.value, password.value); // من useAuth.js
    router.push('/'); // بعد التسجيل نرجع المستخدم للصفحة الرئيسية
  } catch (error) {
    errorMsg.value = error.message;
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="signup-page">
    <h2>إنشاء حساب جديد</h2>

    <form @submit.prevent="handleSignup">
      <div class="form-group">
        <label>الاسم الكامل:</label>
        <input type="text" v-model="name" required />
      </div>

      <div class="form-group">
        <label>البريد الإلكتروني:</label>
        <input type="email" v-model="email" required />
      </div>

      <div class="form-group">
        <label>كلمة المرور:</label>
        <input type="password" v-model="password" required />
      </div>

      <button type="submit" :disabled="loading">
        {{ loading ? 'جاري التسجيل...' : 'تسجيل' }}
      </button>

      <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
    </form>

    <p class="note">
      لديك حساب بالفعل؟ <NuxtLink to="/login">تسجيل الدخول</NuxtLink>
    </p>
  </div>
</template>

<style scoped>
.signup-page {
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
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background-color: #2563eb;
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
