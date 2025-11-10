// app/middleware/auth.js
import { useAuth } from '~/composables/useAuth';

export default defineNuxtRouteMiddleware(() => {
  const { user } = useAuth(); // نجيب المستخدم الحالي من useAuth

  // إذا ما في مستخدم مسجل دخول، نوجهه لصفحة login
  if (!user.value) {
    return navigateTo('/login');
  }
});
