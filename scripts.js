function talk() {
  const input = document.getElementById('input').value.toLowerCase();
  const output = document.getElementById('output');

  if (input.includes("waktu")) {
    const now = new Date();
    output.innerText = `Waktu semasa ialah ${now.toLocaleTimeString('ms-MY')}`;
  } else if (input.includes("siapa kamu")) {
    output.innerText = "Saya JARVIS versi Bahasa Melayu, pembantu maya anda.";
  } else if (input.includes("cuaca")) {
    output.innerText = "Maaf, saya belum disambungkan dengan data cuaca.";
  } else {
    output.innerText = "Saya tidak faham. Cuba tanya dengan cara lain.";
  }

  document.getElementById('input').value = '';
}
