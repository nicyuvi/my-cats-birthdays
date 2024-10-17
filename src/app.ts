import { Character } from "@/types/index";

async function getCharacter(): Promise<Character | void> {
  const URL = "https://rickandmortyapi.com/api/character/2";
  try {
    const response: Response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Character = await response.json();

    // consider putting a type guard here
    console.log(data);
    return data;
  } catch (error) {
    console.error("There was an error with the fetch operation:", error);
  }
}

// TODO: Access res properties
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
