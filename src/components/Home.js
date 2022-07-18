import React, { Component } from 'react'
import { fetchPokeAPI, fetchPokeSpeciesAPI } from '../services/PokeAPI'
import CardPokemon from './CardPokemon'
import '../styles/Home.css'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      inputPokemons: '',
      arrayPokemons: [],
      msg: false,
      template:''
    }
  }

  componentDidMount() {
    this.returnAPI()
    this.returnSpeciesAPI()
  }

  handleChange = ({ target }) => {
    const { value } = target
    this.setState({
      inputPokemons: value
    })
  }

  returnSpeciesAPI = async () => {
    const arrayColor = []
    for (let index = 1; index <= 32; index++) {
      const responseSpecies = await fetchPokeSpeciesAPI(index)
      const resultSpecies = responseSpecies.color.name
      arrayColor.push(resultSpecies)
    }
    this.setState({
      color: arrayColor
    })
  }

  returnAPI = async () => {
    const array = []
    for (let index = 1; index <= 32; index++) {
      const response = await fetchPokeAPI(index)
      array.push(response)
    }
    this.setState({
      arrayPokemons: array,
    })
  }

  render() {
    const { arrayPokemons, msg, inputPokemons } = this.state
    return (
      <div className='containerHome'>
        <NavBar />
        <div className='inputHome'>
          <label htmlFor="search">
            <input
              value={inputPokemons}
              type="text"
              name="search"
              id="search"
              placeholder='Digite o nome do Pokemon'
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className='container'>
          {
            arrayPokemons.filter((ele) => ele.name.startsWith(inputPokemons)).map((ele) => (
              <div>
                <Link className='linkHome'  to={ `/pokeDetails/${ele.id}` } >
                <CardPokemon
                  nome={ele.name}
                  image={ele.sprites.other.home.front_default}
                  key={ele.id}
                  details = {ele.id}
                />
              </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
export default Home;