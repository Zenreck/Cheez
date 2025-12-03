let username = "";
let chatBox = null;

function startChat() {
    username = document.getElementById("nameInput").value.trim();
    if (!username) return alert("Enter a name first!");

    document.getElementById("chatUI").style.display = "block";
    chatBox = document.getElementById("chatBox");

    addMsg("System", "Welcome, " + username + "! Camera turns on in 10 seconds...");

    // Start camera after 10s
    setTimeout(startCamera, 10000);
}

function sendMsg() {
    let msg = document.getElementById("msgInput").value;
    if (!msg) return;

    addMsg(username, msg);
    document.getElementById("msgInput").value = "";
}

function addMsg(name, message) {
    let p = document.createElement("p");
    p.textContent = name + ": " + message;
    chatBox.appendChild(p);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function startCamera() {
    document.getElementById("videoContainer").style.display = "block";

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        document.getElementById("cam").srcObject = stream;
        addMsg("System", "Your camera is now ON.");
    } catch (err) {
        addMsg("System", "Camera access denied.");
    }
}
