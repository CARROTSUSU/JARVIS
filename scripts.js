const output = document.getElementById('output');

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ms-MY';
  speechSynthesis.speak(utterance);
}

function startListening() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'ms-MY';
  recognition.start();

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    output.textContent = "Arahan diterima: " + command;
    processCommand(command);
  };
}

function processCommand(cmd) {
  if (cmd.includes('hello') || cmd.includes('hai')) {
    speak("Hai, apa khabar?");
  } else if (cmd.includes('cuaca')) {
    speak("Saya tidak boleh akses cuaca sekarang.");
  } else {
    speak("Saya tidak faham arahan itu.");
  }
}
