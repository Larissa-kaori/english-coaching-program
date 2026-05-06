// アイコン初期化
lucide.createIcons();

// フォーム送信
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  msg.classList.remove('hidden');
  msg.scrollIntoView({ behavior: 'smooth' });

  setTimeout(() => {
    form.reset();
  }, 500);
});

// スムーススクロール（CTAクリック）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});