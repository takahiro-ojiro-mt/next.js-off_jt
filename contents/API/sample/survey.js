document.getElementById("surveyForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value, 10);
  const job = document.getElementById("job").value;
  const bio = document.getElementById("bio").value.trim();

  let isValid = true;

  // 名前バリデーション
  if (!name) {
    document.getElementById("nameError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("nameError").style.display = "none";
  }

  // 年齢バリデーション
  if (isNaN(age) || age < 18) {
    document.getElementById("ageError").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("ageError").style.display = "none";
  }

  if (!isValid) return;

  const data = {
    name,
    age,
    job,
    bio,
  };

  console.log("送信データ:", JSON.stringify(data, null, 2));
});
