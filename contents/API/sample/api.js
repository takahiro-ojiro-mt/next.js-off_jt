document.addEventListener("DOMContentLoaded", () => {
  const loading = document.getElementById("loading");
  const error = document.getElementById("error");
  const userList = document.getElementById("userList");

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
      loading.style.display = "none";
      users.forEach(user => {
        const li = document.createElement("li");
        li.innerText = user.name;
        userList.appendChild(li);
      });
    })
    .catch(err => {
      loading.style.display = "none";
      error.innerText = "データの取得に失敗しました。";
      console.error("Fetch error:", err);
    });
});
