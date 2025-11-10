// app/composables/useAuth.js

export const useAuth = () => {
  // 🧩 الحالة العامة للمستخدم — Nuxt يخزنها حتى بعد التنقل بين الصفحات
  const user = useState('user', () => null);

  // 🧠 تسجيل مستخدم جديد
  const signUp = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // تأكد ما يكون الإيميل مسجل مسبقًا
    const exists = users.find((u) => u.email === email);
    if (exists) throw new Error('البريد الإلكتروني مسجل بالفعل');

    // أضف المستخدم الجديد
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // سجّله مباشرة بعد التسجيل
    user.value = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
  };

  // 🔐 تسجيل الدخول
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!found) throw new Error('البريد الإلكتروني أو كلمة المرور غير صحيحة');

    // احفظ المستخدم في الحالة والـ localStorage
    user.value = found;
    localStorage.setItem('currentUser', JSON.stringify(found));
  };

  // 🚪 تسجيل الخروج
  const logout = () => {
    user.value = null;
    localStorage.removeItem('currentUser');
  };

  // 🔁 تحميل المستخدم الحالي عند تشغيل الموقع
  if (process.client) {
    const saved = localStorage.getItem('currentUser');
    if (saved && !user.value) {
      user.value = JSON.parse(saved);
    }
  }

  // نرجع القيم والدوال لاستخدامها في الصفحات
  return { user, signUp, login, logout };
};
