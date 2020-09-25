const form = document.querySelector("form");
const notification = document.querySelector(".notification");

const token = config.api_key;
const chatId = config.chat_id;
const url = `https://api.telegram.org/bot${token}/sendMessage`;

async function handleMessageSent(e) {
  e.preventDefault();
  
  const text = `
    Mensagem de: ${form.sender.value}\nEmail: ${form.email.value}\n\n${form.body.value}
  `;
  
  const data = {chat_id: chatId, text};

  const response = await fetch(url, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) });

  if(response.status === 200){
    notification.innerHTML = 'Message sent successfully'
  } else {
    notification.innerHTML = 'Message not sent. Try again later'
  }
}

form.addEventListener("submit", handleMessageSent);