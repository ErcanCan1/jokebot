let jokes = [
    ["What did 0 say to 8?", "Nice belt."],
    ["Hakim Bey en sevdiğiniz mevsim hangisi?", "Yaz, kızım."],
    ["Doktor bey sabah kalkınca burnum kanıyor.", "Öğlen kalk o zaman."],
    ["Bu işler öyle telefonda olmaz, yüz yüze görüşelim.","Tamam o zaman görüntülü arıyorum"]
  ];
  
  let outOfJokesResponses = [
    "I've told you all my jokes!",
    "Why don't you tell me a joke for a change?",
    // Add more responses here
  ];
  
  const chatContent = document.querySelector(".chat-content");
  var jokeIndex = 0;
  var responseIndex = 0;
  var jokeButton = document.getElementById("buton");
  
  function requestJoke() {
    
    appendUserMessage();
    if (jokeIndex < jokes.length) {
      appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");
      setTimeout(function() { appendBotMessage("Ok, got one."); }, 1000);
      setTimeout(function() { appendBotMessage(jokes[jokeIndex][0]); }, 1500);
      setTimeout(function() { appendBotMessage(jokes[jokeIndex][1]); }, 2000);
      setTimeout(function() { return jokeIndex++; }, 2001);
      } else {
      appendBotMessage(outOfJokesResponses[responseIndex]);
      responseIndex = (responseIndex + 1) % outOfJokesResponses.length;
      jokeButton.style.display = "none";
    }
    
  }
  
  function appendBotMessage(messageText) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message bot-message";
    chatContent.appendChild(messageDiv);
    let avatar = document.createElement("div");
    avatar.className = "fas fa-robot message-avatar"; //(https://fontawesome.com/)
    messageDiv.appendChild(avatar);
    let contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = messageText;
    messageDiv.appendChild(contentDiv);
  }
  
  function appendUserMessage() {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message user-message";
    chatContent.appendChild(messageDiv);

    let avatar = document.createElement("div");
    avatar.className = "fas fa-smile message-avatar"; 
    messageDiv.appendChild(avatar);

    let contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = "Tell me a joke";
    messageDiv.appendChild(contentDiv);
  }