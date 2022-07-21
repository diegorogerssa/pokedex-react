import React, {Component} from "react";
import '../styles/CardPokemon.css'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
class CardPokemon extends Component{
    constructor(props) {
        super()
        this.setState = {
          page:props.page
        }
        console.log(props.page);
      }

      leftClick = () =>{
        const { page, left} = this.props
        
        if(page > 0){
          left()
        }
      }

      rightClick = () => {
        const { page, pageTotal, right } = this.props
        if ( page + 1 !== pageTotal){
          right()
        }
        
      }
    

    render(){
        const { arrayPokemons, inputPokemons, page, pageTotal } = this.props
        return(
                <div>
                                
                    <div className="pagination">
                      <h1>Pokedex</h1>
                      <Pagination
                          page = {page }
                          pageTotal = {pageTotal}
                          leftClick = {this.leftClick}
                          rightClick = {this.rightClick}
                      />
                    </div>
                    <div className="container">
                        {
                                arrayPokemons.filter((ele) => ele.name.startsWith(inputPokemons)).map((ele) => (
                                  <div className="containerCard" key={ele.id}>
                                   <Link className='linkHome'  to={ `/pokeDetails/${ele.id}` } >
                        <h1>{ele.name}</h1>
                        <img src={ele.sprites.front_default} alt="" />
                                  </Link>
                                  </div>
                                ))
                              }
                    
                                </div>
                </div>
        )
    }
}
export default CardPokemon