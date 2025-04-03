let count = 0;
const countEl = document.getElementById("count");

document.getElementById("plus").addEventListener("click", () => {
  count++;
  countEl.innerText = count;
});

document.getElementById("minus").addEventListener("click", () => {
  count--;
  countEl.innerText = count;
});
