// assets/js/login.js
document.querySelector('.login form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede a submissão padrão do formulário
    const email = e.target.email.value;
    const password = e.target.pswd.value;

    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (email === savedEmail && password === savedPassword) {
        alert('Login bem-sucedido!');
        window.location.href = "../Artemis/home.html";  // Redireciona para a página home.html
    } else {
        alert('Email ou senha incorretos.');
    }
});
