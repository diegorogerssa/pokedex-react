export async function fetchPokeAPI (id){
   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
   const response = await fetch(url);
   const result = response.json();
   return result
   
}

export async function fetchPokeSpeciesAPI (id){
   const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
   const responseSpecies = await fetch(url);
   const resultSpecies = responseSpecies.json();
   return resultSpecies
   
}

export async function fetchPokeEvolutionAPI (id){
   const url = `${id}`;
   const responseEvolution = await fetch(url);
   const resultEvolution = responseEvolution.json();
   return resultEvolution
   
}

