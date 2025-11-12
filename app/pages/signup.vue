<script setup>
import { ref, onMounted } from 'vue';
import { useAuth } from '~/composables/useAuth';
import { useRouter } from '#app';

const { signUp } = useAuth();
const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');
const errorMsg = ref('');
const loading = ref(false);

const handleSignup = () => {
  try {
    loading.value = true;
    signUp(name.value, email.value, password.value);
    router.push('/');
  } catch (error) {
    errorMsg.value = error.message;
  } finally {
    loading.value = false;
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
  <main class="signup-page">
    <!-- 🪩 الخلفية المتوهجة -->
    <div class="blob blob1"></div>
    <div class="blob blob2"></div>
    <div class="blob blob3"></div>

    <div class="signup-card">
      <h1>✨ Create an Account</h1>
      <p class="welcome">
        Join <span>Smart Shop</span> and enjoy a new fashion experience 👗
      </p>

      <form @submit.prevent="handleSignup">
        <div class="input-group">
          <label>Full Name</label>
          <input type="text" v-model="name" required />
        </div>

        <div class="input-group">
          <label>Email</label>
          <input type="email" v-model="email" required />
        </div>

        <div class="input-group">
          <label>Password</label>
          <input type="password" v-model="password" required />
        </div>

        <UiBaseButton variant="primary" type="submit" :disabled="loading">
          {{ loading ? 'Signing up...' : 'Sign Up' }}
        </UiBaseButton>

        <p v-if="errorMsg" class="error">{{ errorMsg }}</p>
      </form>

      <p class="note">
        Already have an account?
        <NuxtLink to="/login">Log In</NuxtLink>
      </p>
    </div>
  </main>
</template>

<style scoped>
/* 🌌 الخلفية العامة */
.signup-page {
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0d0d0d;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  overflow: hidden;
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

/* ✨ البطاقة الزجاجية */
.signup-card {
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 420px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  box-shadow: 0 0 25px rgba(255, 0, 228, 0.25);
  border-radius: 25px;
  padding: 40px 50px;
  text-align: center;
  animation: fadeInUp 1s ease forwards;
}
.signup-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 35px rgba(0, 195, 255, 0.3);
  transition: 0.4s;
}

.signup-card h1 {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(90deg, #4c00ff, #ff00e4, #00c3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(0, 195, 255, 0.3);
  margin-bottom: 10px;
}

.welcome {
  font-size: 1rem;
  color: #ccc;
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
  margin-bottom: 18px;
}
.input-group label {
  font-size: 0.9rem;
  margin-bottom: 6px;
  color: #ddd;
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

/* ✨ زر التسجيل */
.ui-base-button {
  width: 100%;
  margin-top: 10px;
  padding: 12px;
  font-size: 1.1rem;
  border-radius: 30px;
}

/* رسالة الخطأ */
.error {
  margin-top: 15px;
  color: #ff4b4b;
  font-weight: 600;
}

/* 🔗 النص أسفل */
.note {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #ccc;
}
.note a {
  color: #00c3ff;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}
.note a:hover {
  color: #ff00e4;
  text-shadow: 0 0 8px #ff00e4;
}

/* ✨ أنيميشن الدخول */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
