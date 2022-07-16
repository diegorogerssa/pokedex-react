export async function fetchPokeAPI (id){
   const url =   `https://pokeapi.co/api/v2/pokemon/${id}`;
   const response = await fetch(url);
   const result = response.json();
   return result
   
}