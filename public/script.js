const loginBtn = document.getElementById('login-btn');
const modal = document.getElementById('login-modal');
const closeBtn = document.getElementById('close-btn');
const loginForm = document.getElementById('login-form');

loginBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('Login successful');
        modal.style.display = 'none'; 
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      alert('Error connecting to the server');
      console.error(error);
    }
});
