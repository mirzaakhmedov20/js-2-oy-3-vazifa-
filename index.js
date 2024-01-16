// const butoon = document.getElementById("btn");
// const text = document.getElementById("text");
// const link = document.querySelector("#link");
// const img = document.querySelector("#img");
// const block = document.querySelector("#block");
let button = document.querySelectorAll("#btn");
const card = document.querySelectorAll(".card");

// butoon.addEventListener("click", function () {
//   // text.style.color = "blue"
//   //   console.log(link.getAttribute("href"));

//   //   console.log(link.hasAttribute("id"));
//   let h1 = document.createElement("h1");
//   h1.innerHTML = "hello";
//   h1.style.color = "blue";
//   h1.setAttribute("class", "text");
//   block.appendChild(h1);
// });


function deleteCard(card) {
  const cards = document.querySelector(".cards");
  cards.removeChild(card);
}

button.forEach((button) => {
  button.addEventListener("click", function () {
    const card = this.parentNode;
    if (confirm("Do you really want to delete?")) {
      deleteCard(card);
    }
  });
});
