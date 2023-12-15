// document.querySelector("#app").innerHTML = `
// <button type="button" class="hello1">Hello1</button>
// <button type="button" class="hello2">Hello2</button>
// <button type="button" class="hello3">Hello3</button>
// `;

// console.dir(document.querySelectorAll("p")); // typeof NodeList
// console.dir(Array.from(document.querySelectorAll("p"))); // typeof Array

// document.querySelector("#app").innerHTML = `
// <input/>
// <button>Click</button>
// `;

// document.querySelector("button").addEventListener("click", () => {
//   const currentValue = document.querySelector("input").value;

//   document.querySelector("input").value = currentValue + "*";
// });

// let count = 0;
// setInterval(() => {
//   count++;
//   document.querySelector("#app").innerHTML = `
//   <input/>
//   <button>Click</button>
//   <p>count: ${count}</p>
//   `;
// }, 5000);

document.querySelector("#app").innerHTML = `
  <button type="button" class="btn-add-card">Add card</button>

  <div class="cards"></div>
`;

let cardCount = 0;

document.querySelector(".btn-add-card").addEventListener("click", () => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <p>Card #${cardCount}</p>
    <button type="button">hello</button>
  `;
  cardCount++;
  document.body.appendChild(card);
});
