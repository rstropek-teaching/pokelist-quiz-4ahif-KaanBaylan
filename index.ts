const pokemonList    = document.getElementById('pokemons');
let prevPokemon      = '';
let nextPokemon      = '';

window.onload = () => {
  getPokes("");
}

async function getPokes(url: string) {
  let response: any;
  let pokelist: any;

  if(url == ""){
      response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=18');
      pokelist = await response.json();      
    }
    else{
      response = await fetch(url);
      pokelist = await response.json();      
    }  

    let html = '';
    for(const pokemon of pokelist.results) {
      html += `<div class="col-md-4">`;
      html += `<div class="thumbnail">`;
      
      //if you want to see the Pokemons with pictures uncomment the following lines
      //It takes then a lot of time to load the whole website, but it looks good :D

      // const response = await fetch(pokemon.url);
      // const poki = await response.json();
      // html += `<img src='${poki.sprites.front_default}' style="width: 100%;">`;

      html += `<div class="caption">`;
      html += `<p align="center"> ${pokemon.name} </p>`;
      html += `<button align="center" class='btn btn-default' onclick=info('${pokemon.url}')>Informationen</button>`
      html += `</div>`;
      html += `</div>`;
      html += `</div>`;
    }

    prevPokemon = pokelist.previous;
    nextPokemon = pokelist.next;
    pokemonList.innerHTML = html;
}

async function info(url: string){
  const response = await fetch(url);
  const poke = await response.json();
  let info: string = "Name: ";

  info += poke.name+"\n";
  info += "Weight: "+poke.weight+"\n";
  info += "Abbilities: \n";

  for (const ability of poke.abilities) {
    info += ability.ability.name + "\n";
  }

  alert(info);

  //I tried to do it with a modal, but it didn't show me anything :( 
  //I let the code here so you can look through and maybe tell me my mistake :/

  // let infoBox: HTMLElement | null = document.getElementById('infoBox');
  // let pokeImg: HTMLElement | null = document.getElementById("#pokeImg");
  // let pokeWeight: HTMLElement | null = document.getElementById("#pokeWeight");
  // let pokeName: HTMLElement | null = document.getElementById("#pokeName");
  // let pokeAbs: HTMLElement | null = document.getElementById("#pokeAbs");

  // if(infoBox != null){
  //   infoBox.style.display = "block";
  // }
  // else{
  //   return;
  // }

  // window.onclick = function (event){
  //   if(event.target == infoBox){
  //     infoBox.style.display = "none";
  //   }
  // }

  // const response = await fetch(url);
  // const poke = await response.json();

  // if(pokeName != null){
  //   pokeName.innerHTML = "Name: "+poke.name;    
  // }

  // if(pokeImg != null){
  //   pokeImg.innerHTML = `<img src='${poke.sprites.front_default}'>`;      
  // }
  
  // if(pokeWeight != null){
  //   pokeWeight.innerHTML = "Weight: "+poke.weight;    
  // } 

  // if(pokeAbs != null){
  //   pokeAbs.innerHTML = "Abilities: <br>";
  //   for (const ability of poke.abilities) {
  //     pokeAbs.innerHTML += ability.ability.name + "<br>";
  //   }
  // }
}

$("#next").click(function(){
  if(nextPokemon == ''){
    getPokes("");
  }
  else{
    getPokes(nextPokemon);
  }
});

$("#prev").click(function(){
  if(nextPokemon == ''){
    getPokes("");
  }
  else{
    getPokes(prevPokemon);
  }
});