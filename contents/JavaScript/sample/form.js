document.getElementById("send").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  document.getElementById("result").innerText = `こんにちは、${name}さん！`;
});
