// what does this page do?
const form = document.getElementById('chatForm') as HTMLFormElement;
const chatDiv = document.getElementById('chat') as HTMLDivElement;
const input = document.getElementById('userInput') as HTMLInputElement;

// when the form is submitted
form.addEventListener('submit', async (e: Event) => {
  e.preventDefault(); // prevent page reload

  
  const userMessage = input.value.trim();
  if (!userMessage) return;

  addMessage('user', userMessage); //show in chat
  input.value = ''; // clear input field

  try {
    // send message to backend
    const response = await fetch('https://testbackend-35db.onrender.com/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: userMessage }],
      }),
    });
    // handle backend response
    const data = await response.json();

    if (data?.choices?.[0]?.message?.content) {
      const assistantReply: string = data.choices[0].message.content;
      addMessage('assistant', assistantReply);
    } else {
      addMessage('assistant', "Fehler: Keine gültige Antwort erhalten.");
    }
  } catch (err) {
    console.error(err);
    addMessage('assistant', "Fehler beim Laden der Antwort.");
  }
});

function addMessage(role: 'user' | 'assistant', text: string) {
  const div = document.createElement('div');
  div.className = `message ${role}`; 
  div.textContent = text;
  chatDiv.appendChild(div);
}

