"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.getElementById('chatForm');
const chatDiv = document.getElementById('chat');
const input = document.getElementById('userInput');
form.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    e.preventDefault();
    const userMessage = input.value.trim();
    if (!userMessage)
        return;
    addMessage('user', userMessage);
    input.value = '';
    try {
        const response = yield fetch('https://testbackend-35db.onrender.com/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: [{ role: 'user', content: userMessage }],
            }),
        });
        const data = yield response.json();
        if ((_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.choices) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.message) === null || _c === void 0 ? void 0 : _c.content) {
            const assistantReply = data.choices[0].message.content;
            addMessage('assistant', assistantReply);
        }
        else {
            addMessage('assistant', "Fehler: Keine gültige Antwort erhalten.");
        }
    }
    catch (err) {
        console.error(err);
        addMessage('assistant', "Fehler beim Laden der Antwort.");
    }
}));
function addMessage(role, text) {
    const div = document.createElement('div');
    div.className = 'message';
    div.innerHTML = `<span class="${role}">${role === 'user' ? 'Du' : 'ChatGPT'}:</span> ${text}`;
    chatDiv.appendChild(div);
}
