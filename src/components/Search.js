import React, { Component } from 'react'

class Search extends Component{
  render(){
    const { inputPokemons, handleChange } = this.props
    return(
      <div className='inputHome'>
      <label htmlFor="search">
        <input
          value={inputPokemons}
          type="text"
          name="search"
          id="search"
          placeholder='Digite o nome do Pokemon'
          onChange={handleChange}
        />
      </label>
    </div>
    )
  }
}
export default Search;