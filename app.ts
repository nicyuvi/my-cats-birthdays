import { makeRequest } from "./lib/request";

// async function fetchMovies() {
//   const response = await fetch('/movies');
//   // waits until the request completes...
//   console.log(response);
// }

// TODO: use native fetch instead of makeRequest
async function getRickAndMortyAPI() {
  const url =
    "https://rickandmortyapi.com/api/character/?name=rick&status=alive";
  let res = await makeRequest("GET", url);
  return res;
}

// TODO: Access res properties
function onDOMLoad() {
  document.addEventListener("DOMContentLoaded", async () => {
    const { results } = await getRickAndMortyAPI();
    const div = document.getElementById("status");
    div.insertAdjacentHTML("beforeend", ` ${res}`);
  });
}

function main() {
  onDOMLoad();
}

main();
