document.addEventListener('DOMContentLoaded', () => {
    // Inject theme toggle into navbar
    const nav = document.querySelector('.navbar');
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.textContent = '🌙';
    nav.appendChild(themeBtn);
  
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      themeBtn.textContent = document.body.classList.contains('dark-theme')
        ? '☀️'
        : '🌙';
    });
  
    // Handle login form submission
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.email.value.trim();
      const password = form.password.value.trim();
  
      if (!email || !password) {
        alert('Please enter both email and password.');
        return;
      }
  
      // Placeholder for real authentication
      alert(`Logged in as: ${email}`);
      form.reset();
    });
  });
  