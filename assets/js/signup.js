document.querySelector('.signup form').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede a submissão padrão do formulário

    // Obtendo o valor do campo nome do usuário
    const userName = e.target.txt.value;
    const email = e.target.email.value;
    const password = e.target.pswd.value;

    // Guarda o nome do usuário, o email e a senha no localStorage
    localStorage.setItem("userName", userName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Registrado com sucesso!');
});