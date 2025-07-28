const form = document.getElementById('chatForm');
const chatDiv = document.getElementById('chat');
const input = document.getElementById('userInput');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userMessage = input.value;
  addMessage('user', userMessage);
  input.value = '';
  try {
    const response = await fetch('https://testbackend-35db.onrender.com/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: userMessage }],
      }),
    });
    const data = await response.json();
    if (data?.choices?.[0]?.message?.content) {
      const assistantReply = data.choices[0].message.content;
      addMessage('assistant', assistantReply);
    } else {
      addMessage('assistant', 'Fehler: Keine gültige Antwort erhalten.');
    }
  } catch (err) {
    console.error(err);
    addMessage('assistant', 'Fehler beim Laden der Antwort.');
  }
});
function addMessage(role, text) {
  const div = document.createElement('div');
  div.className = 'message';
  div.innerHTML = `<span class="${role}">${role === 'user' ? 'Du' : 'ChatGPT'}:</span> ${text}`;
    chatDiv.appendChild(div);
  }