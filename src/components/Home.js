import React, { Component } from 'react'
import { fetchPokemon, fetchPokemonURL } from '../services/PokeAPI'
import CardPokemon from './CardPokemon'
import '../styles/Home.css'

import NavBar from './NavBar'
import Search from './Search'


class Home extends Component {
  constructor() {
    super()
    this.state = {
      inputPokemons: '',
      arrayPokemons: [],
      msg: false,
      template:'',
      page:0,
      pageTotal:0,
      color:[]
    }
    console.log(this.state.page);
  }
  
  componentDidMount() {   //?didMount
      this.getPokemon()
  
  }

  left = () => {
    this.setState((prevState)=>({
      page:prevState.page -1
    }), async () => this.getPokemon())
  }
  right = () => {
    this.setState((prevState)=>({
      page:prevState.page +1
    }),async () => this.getPokemon())
  }
 


  getPokemon = async () => {
    const {  page } = this.state
    const itensPerPages = 49
    const data = await fetchPokemon(itensPerPages, itensPerPages * page)
    
   const promisses = data.results.map( async (pokemon) => {
    return await fetchPokemonURL(pokemon.url)
   })
  const result = await  Promise.all(promisses)
   this.setState({
    arrayPokemons:result,
    pageTotal: Math.ceil(data.count / itensPerPages),
   })
  }


  handleChange = ({ target }) => {    
    const { value } = target          //?function
    this.setState({
      inputPokemons: value
    })
  }

    
  render() {
    const { arrayPokemons, msg, inputPokemons, page, pageTotal } = this.state
    return (
      <div className='containerHome'>
        <NavBar />
        <Search 
          handleInput = { inputPokemons } 
          handleChange={this.handleChange}
        />
        
       
        <div className='container'>
          <CardPokemon 
            arrayPokemons = { arrayPokemons }
            inputPokemons = { inputPokemons }
            page = { page }
            pageTotal ={ pageTotal }
            left = { this.left }
            right = { this.right }
          />
        </div>
      </div>
    )
  }
}
export default Home;