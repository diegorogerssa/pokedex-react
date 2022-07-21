export async function fetchPokeAPI(id){
   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
   const response = await fetch(url);
   const result = response.json();
   return result
}

export async function fetchPokemon(limit = 50, offset = 0){
   const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
   const response = await fetch(url);
   return await response.json();
   
}

export async function fetchPokemonURL(urlEndPoint){
   const responseURL = await fetch(urlEndPoint);
   return await responseURL.json();
}



export async function fetchPokeSpeciesAPI (id){
   const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
   const responseSpecies = await fetch(url);
   const resultSpecies = responseSpecies.json();
   return resultSpecies
   
}

export async function fetchPokeEvolutionAPI(id){
   const url = `${id}`;
   const responseEvolution = await fetch(url);
   const resultEvolution = responseEvolution.json();
   return resultEvolution
}

