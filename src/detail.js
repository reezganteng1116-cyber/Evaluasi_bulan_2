import { fetchPokemonDetail } from './modules/api.js';
import { renderPokemonDetail } from './modules/ui.js';

const container = document.getElementById('pokemon-detail');
const params = new URLSearchParams(window.location.search);
const name = params.get('name');

(async () => {
  if (!name) {
    container.innerHTML = '<p>Nama Pokémon tidak ditemukan.</p>';
    return;
  }
  const data = await fetchPokemonDetail(name);
  if (!data) {
    container.innerHTML = '<p>Gagal memuat detail Pokémon.</p>';
    return;
  }
  renderPokemonDetail(container, data);
})();
