const button = document.querySelector(".submit");
const $name = document.querySelector(".name");
const $title = document.querySelector(".title");
const $content = document.querySelector(".content");
let abj;

button.addEventListener("click", msg);

function msg() {
  abj = {
    name: $name.value,
    title: $title.value,
    content: $content.value,
  };

  fetch(`http://localhost:5001/message`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(abj), //bady-תוכן הבקשה
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
    });
}
