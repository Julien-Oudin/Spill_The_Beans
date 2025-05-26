class ChatHistory {
    constructor() {
        this.chat = [];
    }

    addMessage(message, sender) {
        this.chat.push({ message, sender });
    }

    getHistory() {
        return this.chat;
    }

    saveMessages() {
        console.log('Saving chat history...');
        sessionStorage.setItem('chatHistory', JSON.stringify(this.chat));
    }

    loadMessages() {
        const chatHistory = JSON.parse(sessionStorage.getItem('chatHistory'));
        if (chatHistory) {
            chatHistory.forEach(msg => {
                showMessage(msg.message, msg.sender);
                this.chat.push(msg);
            });
        }
    }

    reset() {
        this.chat = [];
        sessionStorage.removeItem('chatHistory');
        const chatBox = document.getElementById("chat");
        chatBox.innerHTML = "";
    }
}

function showMessage(message, sender) {
    const chatBox = document.getElementById("chat");
    const now = new Date();
    const timestamp = `${now.getDate()}/${now.getMonth() + 1} at ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    let name;
    if (sender === "user") {
        name = "You";
    } else {
        name = "Spill the Bot";
    }
    chatBox.innerHTML += `<p><strong>${name}</strong> - ${timestamp}<br>${message}</p>`;
}

var d = new Date();

function fetchJSON(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (Object.keys(data).length === 0 && data.constructor === Object) {
                throw new Error('Empty JSON or malformed JSON');
            }
            console.log(data);
            sendMessage(data.intents);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

const historyMessages = new ChatHistory();

function sendMessage(intents) {
    const chatBox = document.getElementById("chat");
    const input = document.getElementById("question");
    const question = input.value.trim();
    d = new Date();
    historyMessages.addMessage(question, "user");
    showMessage(question, "user");
    let response = "I don't understand your question";
    for (const intent of intents) {
        for (const pattern of intent.patterns) {
            if (question.toLowerCase().includes(pattern.toLowerCase())) {
                const responses = intent.responses;
                response = responses[Math.floor(Math.random() * responses.length)];
                break;
            }
        }
        if (response != "I don't understand your question") {
            break;
        }
    }
    showMessage(response, "bot");
    historyMessages.addMessage(response, "bot");
    input.value = "";
}

window.addEventListener("beforeunload", () => {
    historyMessages.saveMessages();
});

window.addEventListener("DOMContentLoaded", () => {
    historyMessages.loadMessages();

    const input = document.getElementById("question");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            document.getElementById("question-submit").click();
        }
    });
});
