import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'

const PokemonCard = (props) => {

  const evoluirPokemon = (pokemonName) => {
    console.log("Cliquei no botão de evoluir")

    if(pokemonName ==='Pichu'){
      props.setPokemon({
        ...props.pokemon,
        name: "Pikachu",
        evolved: true,
        weight: 6,
        image: 'https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png',
        id: 0.1
      })
    } else if (pokemonName === 'Bulbasaur') {
      props.setPokemon({
        ...props.pokemon1,
        name: "Ivysaur",
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
        evolved: true,
        weight: 19,
        color: 'Orange',
        image: 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png',
        id: 3.1
      })
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