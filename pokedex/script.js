const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const pokeName = document.getElementById("pokemon-name");
const pokeId = document.getElementById("pokemon-id");
const pokeWeight = document.getElementById("weight");
const pokeHeight = document.getElementById("height");
const pokeImg = document.getElementById("sprite")
const pokeTypes = document.getElementById("types");
const pokeHp = document.getElementById("hp");
const pokeAtk = document.getElementById("attack");
const pokeDef = document.getElementById("defense");
const pokeSpAtk = document.getElementById("special-attack");
const pokeSpDef = document.getElementById("special-defense");
const pokeSpd = document.getElementById("speed");

const apiUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const pokeStats = [pokeHp,pokeAtk,pokeDef,pokeSpAtk,pokeSpDef,pokeSpd];

const fetchData = async() => {
    try {
        const pokemonQuery = searchInput.value.trim().toLowerCase();
        const response = await fetch(`${apiUrl}/${pokemonQuery}`);
        if (!response.ok) {
            alert("Pokemon not found")
            return;
        }
        const data = await response.json();
        showPokemonInfo(data);
    } catch (err) {
        console.log(err);
        alert("An error occurred. Please try again later.");
    }
};

const showPokemonInfo = (data) => {
    const { name,id,weight,height,types,stats,sprites } = data;
    const typeArray = types.map(t => t.type.name);

    pokeName.textContent = name.toUpperCase();
    pokeId.textContent = `#${id}`;
    pokeWeight.textContent = `Weight: ${weight}`;
    pokeHeight.textContent = `Height: ${height}`;
    pokeImg.src = sprites.front_default;
    pokeImg.alt = `${name}`;
    pokeTypes.innerHTML = showType(typeArray);
    stats.forEach((stat,index) => {
        pokeStats[index].textContent = stat.base_stat;
    });

    console.log(pokeTypes);
};

const showType = array => {
    let spanEl = "";
    array.forEach((type) => {
        spanEl += `<span class="${type}">${type.toUpperCase()}</span>`
    })
    return spanEl;
}



searchBtn.addEventListener("click",() => {
    if(searchInput.value === "") {
        alert("Please enter the name or id of a Pokemon");
        return;
    }else{
        fetchData();
    }
});

searchInput.addEventListener("keypress",function(event) {
    if(event.key === "Enter"){
        searchBtn.click();
    }
})