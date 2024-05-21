function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
      addMessage(userInput, true);
      // Respuesta del chatbot
      setTimeout(function() {
        var response = getChatbotResponse(userInput);
        addMessage(response, false);
      }, 1000);
    }
  }
  
  function addMessage(message, isUser) {
    var messagesContainer = document.getElementById("messages");
    var li = document.createElement("li");
    li.classList.add("message");
    if (isUser) {
      li.classList.add("user-message");
      li.textContent = "Tú: " + message;
    } else {
      li.classList.add("bot-message");
      li.textContent = "Chatbot: " + message;
    }
    messagesContainer.appendChild(li);
    // Desplazar la barra de desplazamiento al fondo
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
  
  function getChatbotResponse(userInput) {
    // Aquí puedes implementar la lógica del chatbot para responder a diferentes mensajes
    // Por ahora, responderemos con mensajes predeterminados
    var responses = [
      "¡Hola! ¿Cómo estás?",
      "¿En qué puedo ayudarte?",
      "¿Hay algo más en lo que pueda ayudarte?"
    ];
    // Obtener una respuesta aleatoria del arreglo
    var randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  }