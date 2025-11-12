<script setup>
import { ref, onMounted } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { navigateTo } from '#app';

const { login } = useAuth();
const email = ref('');
const password = ref('');

const loginUser = () => {
  try {
    login(email.value, password.value);
    alert('تم تسجيل الدخول بنجاح 🎉');
    navigateTo('/');
  } catch (err) {
    alert(err.message);
  }
};

/* ✨ حركة الإضاءة الخلفية */
onMounted(() => {
  const blobs = document.querySelectorAll('.blob');
  blobs.forEach((blob) => {
    blob.animate(
      [
        { transform: 'translate(0, 0) scale(1)' },
        { transform: 'translate(60px, -60px) scale(1.2)' },
        { transform: 'translate(-40px, 60px) scale(0.9)' },
        { transform: 'translate(0, 0) scale(1)' },
      ],
      {
        duration: 15000,
        iterations: Infinity,
        direction: 'alternate',
      },
    );
  });
});
</script>

<template>
  <main class="login-page">
    <!-- 🪩 الخلفية المتوهجة -->
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="blob blob3"></div>

    <div class="login-card">
      <h1>🔐 Login</h1>
      <p class="welcome">Welcome back to <span>Smart Shop</span></p>

      <form @submit.prevent="loginUser">
        <div class="input-group">
          <label>Email</label>
          <input type="email" v-model="email" required />
        </div>

        <div class="input-group">
          <label>Password</label>
          <input type="password" v-model="password" required />
        </div>

        <UiBaseButton variant="primary" type="submit"> Sign In </UiBaseButton>
      </form>

      <p class="signup-text">
        Don’t have an account?
        <NuxtLink to="/signup">Create one</NuxtLink>
      </p>
    </div>
  </main>
</template>

<style scoped>
/* 🌌 الخلفية العامة */
.login-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  background: #0d0d0d;
  overflow: hidden;
  color: #fff;
}

/* 🪩 الخلفيات المتوهجة */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.6;
  z-index: 0;
}
.blob1 {
  width: 500px;
  height: 500px;
  background: #4c00ff;
  top: -100px;
  left: -100px;
}
.blob2 {
  width: 400px;
  height: 400px;
  background: #ff00e4;
  bottom: -100px;
  right: -100px;
}
.blob3 {
  width: 350px;
  height: 350px;
  background: #00c3ff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* ✨ البطاقة */
.login-card {
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 400px;
  padding: 40px 50px;
  border-radius: 25px;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  box-shadow: 0 0 25px rgba(255, 0, 228, 0.25);
  animation: fadeInUp 1.2s ease forwards;
}
.login-card:hover {
  box-shadow: 0 0 35px rgba(0, 195, 255, 0.3);
  transform: scale(1.02);
  transition: 0.4s;
}

h1 {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(90deg, #4c00ff, #ff00e4, #00c3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(0, 195, 255, 0.3);
  margin-bottom: 10px;
}

.welcome {
  color: #bbb;
  margin-bottom: 25px;
}
.welcome span {
  color: #00c3ff;
  font-weight: bold;
}

/* ✨ الحقول */
.input-group {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 20px;
}
.input-group label {
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 6px;
}
.input-group input {
  padding: 10px 12px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  outline: none;
  transition: all 0.3s ease;
}
.input-group input:focus {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0 15px rgba(0, 195, 255, 0.4);
}

/* ✨ الزر */
.ui-base-button {
  width: 100%;
  margin-top: 10px;
  padding: 12px;
  font-size: 1.1rem;
  border-radius: 30px;
}

/* ✨ رابط التسجيل */
.signup-text {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #ccc;
}
.signup-text a {
  color: #00c3ff;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}
.signup-text a:hover {
  color: #ff00e4;
  text-shadow: 0 0 8px #ff00e4;
}

/* ✨ أنيميشن */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
