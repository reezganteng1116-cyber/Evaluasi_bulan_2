import { fetchPokemonList } from './modules/api.js';
import { renderPokemonList } from './modules/ui.js';
import { saveToLocal, getFromLocal } from './modules/storage.js';

const container = document.getElementById('pokemon-list');

(async () => {
  let pokemons = getFromLocal('pokemons');
  if (!pokemons) {
    pokemons = await fetchPokemonList(50);
    pokemons = pokemons.map(p => {
      const id = p.url.split("/").filter(Boolean).pop();
      return { ...p, id };
    });

    saveToLocal('pokemons', pokemons);
  }

  renderPokemonList(container, pokemons);
})();
