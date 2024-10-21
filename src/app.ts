import { getCharacter } from "@/api/get-character";

// TODO:
// Access res properties
// - client side js goes here (DOM manipulation)

function onDOMLoad() {
  document.addEventListener("DOMContentLoaded", async (): Promise<void> => {
    await getCharacter();

    // const div = document.getElementById("status");
    // div.insertAdjacentHTML("beforeend", ` ${res}`);
  });
}

function main() {
  onDOMLoad();
}

main();
