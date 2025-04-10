
const output = document.getElementById("output");
const lastCmd = document.getElementById("last-command");
const timeDisplay = document.getElementById("time");
const synth = window.speechSynthesis;

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ms-MY";
  synth.speak(utterance);
  output.innerText = text;
  lastCmd.innerText = text;
}

function startListening() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "ms-MY";
  recognition.start();

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    output.innerText = "Arahan: " + command;
    lastCmd.innerText = command;
    handleCommand(command);
  };

  recognition.onerror = () => {
    speak("Maaf, saya tidak dengar arahan itu.");
  };
}

function handleCommand(cmd) {
  if (cmd.includes("hello") || cmd.includes("hai")) {
    speak("Hai Tuan, ada yang boleh saya bantu?");
  } else if (cmd.includes("main lagu")) {
    speak("Baik, saya sedang mainkan lagu.");
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  } else if (cmd.includes("buka google")) {
    speak("Membuka Google.");
    window.open("https://www.google.com", "_blank");
  } else {
    speak("Arahan tidak dikenali.");
  }
}

// Clock
setInterval(() => {
  const now = new Date();
  timeDisplay.innerText = now.toLocaleTimeString();
}, 1000);
