window.onload = function () {
    let userName = localStorage.getItem("userName");

    if (userName) {
      // Supondo que você tenha um elemento h4 para exibir o nome do usuário assim:
      // <h4 id="profileName"></h4>

      document.getElementById("profileName").innerText = userName;
    } else {
      // Faça algo se o nome do usuário não estiver disponível, por exemplo, redirecione para a página de login
    }
  };