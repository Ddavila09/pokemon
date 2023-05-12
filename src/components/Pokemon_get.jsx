
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon_get = () => {

    const [pokemons, setPokemons] = useState([])

    let [buttonClicked, setButtonClicked] = useState(false)

    useEffect(() => {
        if(buttonClicked){
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then((response) => {
                console.log(response.data.results)
                setPokemons(response.data.results)
            })
            .catch((err) => {
                console.log("Catch error message", err)
            })
        }
    }, [buttonClicked])

    return (
        <div>
            <button className='btn btn-primary' onClick={() => { setButtonClicked(!buttonClicked) }}>Fetch a Pokemon!</button>
            {
                pokemons.map((pokemon, i) => {
                    return (
                        <div key={i}>
                            <li>{pokemon.name}</li>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pokemon_get