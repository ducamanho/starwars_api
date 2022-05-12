function getCharacters() {
  fetch("https://swapi.dev/api/people/?page-1")
    .then((response) => response.json())
    .then((responseJson) =>
      responseJson.results.map((character) => addCharacter(character))
    )
    .catch((error) => console.log(error));
}

getCharacters();

function addCharacter(character) {
  console.log(character);
  const characterContent = `
  <div class="card">
        <h1>${character.name}</h1>
        <div class="imageContainer">
          <img
            src="https://starwars-visualguide.com/assets/img/characters/${character.url.replace(
              /\D+/g,
              ""
            )}.jpg"
            alt="${character.name}"
          />
        </div>
        <div class="infoContainer">
          <h2>About:</h2>
          <div class="infoContent">
            <h3>Name: ${character.name}</h3>
            <h3>Birth Year: ${character.birth_year}</h3>
            <h3>Gender: ${character.gender}</h3>
          </div>
        </div>
      </div>
      `;

  const sectionGrid = document.getElementsByClassName("cardContainer")[0];

  sectionGrid.insertAdjacentHTML("beforeEnd", characterContent);
}
