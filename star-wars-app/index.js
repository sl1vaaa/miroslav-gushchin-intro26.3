const peopleButton = document.querySelector("#peopleButton");
const planetButton = document.querySelector("#planetsButton");
const content = document.querySelector("#content");
let personCounter = 1;
let planetCounter = 1;

peopleButton.addEventListener("click", fetchPeopleData);

async function fetchPeopleData() {
  try {
    const response = await fetch(
      "https://swapi.dev/api/people/" + personCounter + "/",
    );

    if (!response.ok) {
      throw new Error("Couldn't get data from the API");
    }

    const data = await response.json();
    console.log(data);

    content.innerHTML = "<h2>Random Star Wars Character:</h2>";

    const peopleList = document.createElement("ul");

    const personItem = document.createElement("li");

    personItem.innerHTML = `
      <strong>${data.name}</strong><br>
      Height: ${data.height}<br>
      Mass: ${data.mass}<br>
      Hair Color: ${data.hair_color === "n/a" ? "Doesn't have hair" : data.hair_color}<br>
      Skin Color: ${data.skin_color}<br>
      Birth Year: ${data.birth_year}<br>
      Gender: ${data.gender === "n/a" ? "Doesn't have gender" : data.gender}<br>
      Eye Color: ${data.eye_color === "n/a" ? "Doesn't have eyes" : data.eye_color}
      `;

    peopleList.appendChild(personItem);
    content.appendChild(peopleList);

    personCounter++;

    if (personCounter > 82) {
      personCounter = 1;
    }
  } catch (error) {
    console.error("New error occured: ", error);
    content.innerHTML = "<p>There was an error loading the character</p>";
    personCounter++;
    if (personCounter > 82) {
      personCounter = 1;
    }
  }
}

planetButton.addEventListener("click", fetchPlanetData);

async function fetchPlanetData() {
  try {
    const response = await fetch(
      "https://swapi.dev/api/planets/" + planetCounter + "/",
    );

    if (!response.ok) {
      throw new Error("Couldn't get data from the API");
    }

    const data = await response.json();
    console.log(data);

    content.innerHTML = "<h2>Random Star Wars Planet:</h2>";

    const planetList = document.createElement("ul");

    const planetItem = document.createElement("li");

    planetItem.innerHTML = `
      <strong>${data.name}</strong><br>
      Diameter: ${data.diameter}km<br>
      Rotation Period: ${data.rotation_period}hours<br>
      Orbital Period: ${data.orbital_period}days<br>
      Gravity: ${data.gravity}G<br>
      Population: ${data.population}<br>
      Climate: ${data.climate}<br>
      Terrain: ${data.terrain}<br>
      Surface Water: ${data.surface_water}%
      `;

    planetList.appendChild(planetItem);
    content.appendChild(planetList);
    planetCounter++;
    if (planetCounter > 60) {
      planetCounter = 1;
    }
  } catch (error) {
    console.error("New error occured: ", error);
    content.innerHTML = "<p>There was an error loading the planet</p>";
    planetCounter++;
    if (planetCounter > 60) {
      planetCounter = 1;
    }
  }
}
