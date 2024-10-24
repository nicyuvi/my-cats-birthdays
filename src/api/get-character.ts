// right now this is run on the client
// i can just make this run on the server instead
// TODO: implement server
// import { Character } from "@/types/index";
//
// export async function getCharacter(): Promise<Character | void> {
//   const URL = "https://rickandmortyapi.com/api/character/2";
//   try {
//     const response: Response = await fetch(URL);
//
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//
//     const data: Character = await response.json();
//
//     // consider putting a type guard here
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.error("There was an error with the fetch operation:", error);
//   }
// }
