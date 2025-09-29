const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchPokemonList(limit = 50) {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`);
    if (!response.ok) throw new Error('Gagal ambil daftar Pokémon');
    const data = await response.json();
    return data.results.map((p) => {
      const id = p.url.split('/').filter(Boolean).pop();
      return { ...p, id };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchPokemonDetail(identifier) {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${identifier}`);
    if (!response.ok) throw new Error('Gagal ambil detail Pokémon');
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

