import { goto } from "../router";

export function renderIndex() {
  document.querySelector("#app").innerHTML = `
      <h1>Movie Info</h1>
      <form>
        <input type='search' name='query' />
        <button type='submit'>Search</button>
      </form>
    `;

  document.body.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    goto(`/search?query=${event.target.query.value}`, { push: true });
  });
}
