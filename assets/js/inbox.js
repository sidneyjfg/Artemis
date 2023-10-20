document.querySelector('.send').addEventListener('click', function() {
    var textArea = document.querySelector('.input-area textarea');
    var messageList = document.querySelector('.message-list');
    
    // Criando uma nova mensagem
    var newMessage = document.createElement('div');
    newMessage.classList.add('message', 'sender'); // Esta simulação é para a mensagem do remetente
    newMessage.innerText = textArea.value;
    
    // Adicionando a nova mensagem à lista
    messageList.appendChild(newMessage);
    
    // Limpar o textarea
    textArea.value = '';
    
    // Rolando a caixa de chat para mostrar a última mensagem
    messageList.scrollTop = messageList.scrollHeight;
});

// Dados fictícios para as conversas
const conversations = {
    "1": [
        "Olá, como você está?",
        "Estou planejando um novo projeto, gostaria de discutir.",
    ],
    "2": [
        "Você viu as atualizações?",
        "Sim, parece ótimo!",
    ],
    // ... adicione mais conversas conforme necessário
};

document.addEventListener("DOMContentLoaded", function() {
    // Pegando todos os itens da lista de conversas
    const conversationItems = document.querySelectorAll("[data-conversation-id]");
    
    // Adicionando evento de clique a cada item
    conversationItems.forEach(item => {
        item.addEventListener("click", function() {
            // Pegando o ID da conversa do item clicado
            const conversationId = this.getAttribute("data-conversation-id");
            
            // Pegando as mensagens associadas
            const messages = conversations[conversationId];
            
            // Localizando a div da lista de mensagens e limpando-a
            const messageListDiv = document.querySelector(".message-list");
            messageListDiv.innerHTML = '';
            
            // Adicionando as mensagens à div da lista de mensagens
            messages.forEach(message => {
                const messageDiv = document.createElement("div");
                messageDiv.classList.add("message");
                messageDiv.textContent = message;
                messageListDiv.appendChild(messageDiv);
            });
        });
    });
});
