const output = document.getElementById("output");
const synth = window.speechSynthesis;
const bgMusic = document.getElementById("bg-music");
const powerUp = document.getElementById("power-up");

function speak(text, lang = "en-GB", callback) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.pitch = 1.1;
  utterance.rate = 0.95;
  utterance.volume = 1;

  if (callback) utterance.onend = callback;
  synth.speak(utterance);
}

window.addEventListener('DOMContentLoaded', () => {
  powerUp.play();

  powerUp.onended = () => {
    bgMusic.volume = 0.3;
    bgMusic.play();

    const intro = "Initializing system. JARVIS online. Welcome back, sir. All systems are functional and ready.";
    speak(intro, "en-GB");
  };
});

function startListening() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "ms-MY";
  recognition.start();

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    output.innerText = "Arahan: " + command;
    handleCommand(command);
  };

  recognition.onerror = () => {
    speak("Maaf, saya tidak dengar arahan itu.", "ms-MY");
  };
}

function handleCommand(cmd) {
  if (cmd.includes("hello") || cmd.includes("hai")) {
    speak("Hai Tuan, ada yang boleh saya bantu?", "ms-MY");
  } else if (cmd.includes("main lagu")) {
    speak("Baik, saya sedang mainkan lagu.", "ms-MY");
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  } else if (cmd.includes("buka google")) {
    speak("Membuka Google.", "ms-MY");
    window.open("https://www.google.com", "_blank");
  } else {
    speak("Arahan tidak dikenali.", "ms-MY");
  }
}
