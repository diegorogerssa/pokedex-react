import React, { Component } from 'react'
import '../styles/NavBar.css'
class NavBar extends Component{
  render() {
    return(
      <nav className='containerNavBar'>
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo-poke-api" />
      </nav>
    )
  }
}
export default NavBar;