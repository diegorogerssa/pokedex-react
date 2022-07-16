import React, {Component} from "react";
import '../styles/CardPokemon.css'
// import { Link } from "react-router-dom";
class CardPokemon extends Component{


    

    render(){
        const { nome, image } = this.props
        return(
            <div className="containerCard">
                <h1>{nome}</h1>
                <img src={image} alt="" />
            </div>
        )
    }
}
export default CardPokemon