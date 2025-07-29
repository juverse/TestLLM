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
// Timer for 20 Minuten Countdown
const timerDiv = document.getElementById('timer');
let remaining = 20 * 60; // 20 Minuten in Sekunden
function pad2(n) {
    return n < 10 ? '0' + n : '' + n;
}
function updateTimer() {
    const min = pad2(Math.floor(remaining / 60));
    const sec = pad2(remaining % 60);
    if (timerDiv)
        timerDiv.textContent = `${min}:${sec}`;
}
updateTimer();
const timerInterval = setInterval(() => {
    if (remaining > 0) {
        remaining--;
        updateTimer();
    }
    else {
        clearInterval(timerInterval);
        if (timerDiv)
            timerDiv.textContent = 'Zeit abgelaufen';
    }
}, 1000);
// what does this page do?
const form = document.getElementById('chatForm');
const chatDiv = document.getElementById('chat');
const input = document.getElementById('userInput');
// when the form is submitted
form.addEventListener('submit', (e) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    e.preventDefault(); // prevent page reload
    const userMessage = input.value.trim();
    if (!userMessage)
        return;
    addMessage('user', userMessage); //show in chat
    input.value = ''; // clear input field
    try {
        // send message to backend
        const response = yield fetch('https://testbackend-35db.onrender.com/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: [{ role: 'user', content: userMessage }],
            }),
        });
        // handle backend response
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
    div.className = `message ${role}`;
    div.textContent = text;
    chatDiv.appendChild(div);
}
