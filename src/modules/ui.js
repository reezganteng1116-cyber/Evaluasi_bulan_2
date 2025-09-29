import { capitalize, formatHeight, formatWeight } from "../utils.js";

function getImageSrc(pokemon) {
  return `./assets/images/${pokemon.name}.png`;
}

export function renderPokemonList(container, pokemons) {
  container.innerHTML = "";
  pokemons.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("product");
    card.innerHTML = `
        <img src="./assets/images/${p.name}.png" alt="${p.name}">
        <h1 style="color: black;">${capitalize(p.name)}</h1>
        <a href="detail.html?name=${p.name}">
        <div class = "btn-detail">Detail
        </div>
      </a>
    `;
    container.appendChild(card);
  });
}


export function renderPokemonDetail(container, pokemon) {
  container.innerHTML = `
    <div class="detail-header">
      <img src="${getImageSrc(pokemon)}" alt="${pokemon.name}">
    </div>
    <div class="detail-body">
      <h1 align = "center">${capitalize(pokemon.name)}</h1>
      <strong>
      <ul align = "center">
      <li>ID: ${pokemon.id}</li>
      <li>Height: ${formatHeight(pokemon.height)}</li>
      <li>Weight: ${formatWeight(pokemon.weight)}</li>
      <li>Types: ${pokemon.types.map((t) => capitalize(t.type.name)).join(", ")}</li>
      </ul>
      </strong>
      <br>
      <div class = "deskripsi" align = "center">
      Ini adalah pokemon <strong>${capitalize(pokemon.name)}
      </strong> yang mempunyai kekuatan <strong>${pokemon.types.map((t) => capitalize(t.type.name))}</strong>, dia adalah pokemon yang memiliki ukuran berat sekitar <strong>${formatWeight(pokemon.height)}</strong> dan memiliki tinggi badan <strong>${formatHeight(pokemon.height)}
      </strong>
    </div>
  `;
}
