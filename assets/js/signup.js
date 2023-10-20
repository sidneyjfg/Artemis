// assets/js/registration.js
document.querySelector('.signup form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede a submissão padrão do formulário
    const email = e.target.email.value;
    const password = e.target.pswd.value;

    // Guarda o email e a senha no localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Registrado com sucesso!');
});
