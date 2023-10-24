const editBtn = document.querySelector('.edit-btn');
const pElement = document.querySelector('.main-info.header-text p');
let originalText = pElement.textContent;  // Guarda o texto original

editBtn.addEventListener('click', function() {
    if (editBtn.textContent === 'Editar') {
        const textarea = document.createElement('textarea');
        textarea.value = originalText;
        textarea.rows = 3;
        textarea.style.width = '100%';
        pElement.replaceWith(textarea);
        textarea.focus();

        // Altera o texto do botão
        editBtn.textContent = 'Salvar';

        // Cria um botão de cancelar
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancelar';
        cancelBtn.classList.add('cancel-btn');
        editBtn.after(cancelBtn);

        cancelBtn.addEventListener('click', function() {
            textarea.replaceWith(pElement);
            editBtn.textContent = 'Editar';
            cancelBtn.remove();
        });

        textarea.addEventListener('blur', function() {
            const newP = document.createElement('p');
            newP.textContent = textarea.value;
            originalText = textarea.value; // Atualiza o texto original
            textarea.replaceWith(newP);
            editBtn.textContent = 'Editar'; // Aqui estamos retornando o texto do botão para "Editar"
            document.querySelector('.cancel-btn').remove();  // Remove o botão de cancelar
        });

    } else if (editBtn.textContent === 'Salvar') {
        pElement.textContent = document.querySelector('.main-info.header-text textarea').value;
        const textarea = document.querySelector('.main-info.header-text textarea');
        textarea.replaceWith(pElement);
        editBtn.textContent = 'Editar';
        document.querySelector('.cancel-btn').remove();  // Remove o botão de cancelar
    }
});





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

  document.querySelector('.edit-btn').addEventListener('click', function() {
  const pElement = document.querySelector('.main-info.header-text p');

  // Transforma o parágrafo em uma textarea se ainda não for uma
  if (pElement.tagName.toLowerCase() !== 'textarea') {
      const textarea = document.createElement('textarea');
      textarea.value = pElement.textContent;
      textarea.rows = 3;
      textarea.style.width = '100%';
      pElement.replaceWith(textarea);

      textarea.focus();  // Foca a textarea para edição

      // Adiciona um listener para detectar quando a textarea perde o foco
      textarea.addEventListener('blur', function() {
          const newP = document.createElement('p');
          newP.textContent = textarea.value;
          textarea.replaceWith(newP);
      });
  }
});

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("premiumModal");
    var closeBtn = document.querySelector(".close-modal");

    // Função para mostrar a modal
    function openModal() {
        modal.style.display = "block";
    }

    // Função para fechar a modal
    function closeModal() {
        modal.style.display = "none";
    }

    closeBtn.addEventListener("click", closeModal);

    // Quando o usuário clicar fora da modal, ela se fecha
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});
