import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'

const PokemonCard = (props) => {

  const evoluirPokemon = (pokemonName) => {
    console.log("Cliquei no botão de evoluir")

    if (props.pokemon.evolved === false){
      if(pokemonName ==='Pichu'){
        props.setPokemon({
          ...props.pokemon,
          name: "Pikachu",
          type: 'Eletric',
          evolved: true,
          weight: 6,
          image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png',
          id: 0.1
        })
      } else if (pokemonName === 'Bulbasaur') {
        props.setPokemon({
          ...props.pokemon1,
          name: "Ivysaur",
          type: 'Grass',
          evolved: true,
          weight: 13,
          color: 'green',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png',
          id: 1.1
        })
      } else if (pokemonName === 'Squirtle'){
        props.setPokemon({
          ...props.pokemon2,
          name: "Wartortle",
          type: 'Water',
          evolved: true,
          weight: 22.5,
          color: 'blue',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png',
          id: 2.1
        })
      } else if (pokemonName === 'Charmander'){
        props.setPokemon({
          ...props.pokemon3,
          name: "Charmeleon",
          type: 'Fire',
          evolved: true,
          weight: 19,
          color: 'Orange',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png',
          id: 3.1
        })
      }
    }else{
      if (pokemonName === "Pikachu"){
        props.setPokemon({
          ...props.pokemon,
          name: "Raichu",
          type: "Electric",
          evolved: true,
          weight: 30,
          color: 'Yellow',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png',
          id: 0.2
        })
      } else if (pokemonName === "Ivysaur"){
        props.setPokemon({
          ...props.pokemon1,
          name: 'Venusaur',
          type: "Grass",
          evolved: true,
          weight: 100,
          color: 'Green',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png',
          id: 1.2
        })
      } else if (pokemonName === "Wartortle"){
        props.setPokemon({
          ...props.pokemon2,
          name: "Blastoise",
          type: "Water",
          evolved: true,
          weight: 85.5,
          color: 'Blue',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png',
          id: 2.2
        })
      } else if (pokemonName === "Charmeleon"){
        props.setPokemon({
          ...props.pokemon3,
          name: 'Charizard',
          type: 'Fire',
          evolved: true,
          weight: 90.5,
          color: 'Orange',
          image: 'https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png',
          id: 3.2
        })
      }
    }
  }

  return (
    <Card color={props.pokemon.color}>
        <img src={props.pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{props.pokemon.name}</PokemonName>
        <PokemonType>{props.pokemon.type}</PokemonType>
        <p>{props.pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon(props.pokemon.name)}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard