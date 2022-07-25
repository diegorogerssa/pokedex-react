import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { fetchPokeAPI, fetchPokeEvolutionAPI, fetchPokeSpeciesAPI } from '../services/PokeAPI'
import '../styles/pokeDetails.css'

class pokeDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemonTitle:'',
            pokemonImage:'',
            pokemonAbility01:'',
            pokemonAbility02:'', 
            color:'',
            evolution:'',
            pokemonEvolution:'',
            pokemonEvolution2:'',
            pokemonEvolution3:'',
            imageEvolution:'',
            imageEvolution2:''
        }
        
    }
    componentDidMount(){
        this.pokeDetails()
        this.returnSpeciesAPI()
        // this.pokeEvolution()

    }

    returnSpeciesAPI = async () => {
        const { id } = this.props.match.params
          const responseSpecies = await fetchPokeSpeciesAPI(id)
          const resultSpecies = responseSpecies.color.name
          const evolution = responseSpecies.evolution_chain.url
        this.setState({
          color: resultSpecies,
          evolution: evolution
        }, () =>{
            this.pokemonEvo()
        })
      }


      pokemonEvo = async () => {
        const { evolution, pokemonTitle} = this.state
        const response = await fetchPokeEvolutionAPI(evolution)
        const pokemonEvolution1 = response.chain.species.name
        const pokemonEvolution2 = response.chain.evolves_to[0].species.name
        const pokemonEvolution3 = response.chain.evolves_to[0].evolves_to[0].species.name
        if (pokemonEvolution1 === pokemonTitle){
            this.setState({
                pokemonEvolution:pokemonEvolution2,
                pokemonEvolution2:pokemonEvolution3
            },() =>{
                const { pokemonTitle } = this.state
                console.log(this.state.pokemonEvolution, pokemonTitle)
                this.pokeDetails02()
            })
       }
        else if(pokemonEvolution2 === pokemonTitle){
            this.setState({
                pokemonEvolution:pokemonEvolution1,
                pokemonEvolution2:pokemonEvolution3
            },() =>{
                const { pokemonTitle } = this.state
                console.log(this.state.pokemonEvolution)
                this.pokeDetails02()
            })
        }else if(pokemonEvolution3 === pokemonTitle) {
            this.setState({
                
                pokemonEvolution:pokemonEvolution1,
                pokemonEvolution2:pokemonEvolution2
            },() =>{
                const { pokemonTitle } = this.state
                console.log(this.state.pokemonEvolution)//!criar um state false ou true para colocar uma renderização condicional
                this.pokeDetails02()
            })
        }

    }

       

      pokeDetails02 = async() =>{
        const { pokemonEvolution, pokemonEvolution2 } = this.state
         const responseEvolution = await fetchPokeAPI(pokemonEvolution)
         const responseEvolution2 = await fetchPokeAPI(pokemonEvolution2)         
         const image = responseEvolution.sprites.other.home.front_default
         const image2 = responseEvolution2.sprites.other.home.front_default                               
         this.setState({
             imageEvolution:image,
             imageEvolution2:image2
         })
     }



    pokeDetails = async () => {
        const { id } = this.props.match.params
        const response = await fetchPokeAPI(id)
        console.log(response)
        const pokemonTitle = await response.name
        const image = await response.sprites.other.home.front_default
        const ability01 = await response.abilities[0].ability.name
        const ability02 = await response.abilities[1].ability.name
        this.setState({
          pokemonTitle: pokemonTitle,
          pokemonImage: image,
          pokemonAbility01: ability01,
          pokemonAbility02: ability02
      })
    }

    
   

render(){
    const { pokemonTitle, pokemonImage, pokemonAbility01,pokemonAbility02, color, pokemonEvolution, pokemonEvolution2, imageEvolution, imageEvolution2 } = this.state
    return (
        <div>
            <NavBar/>
            <div className='containerDetails' style={{backgroundColor:`${color}`}}>
            <div className='backgroundImage'></div>
                <div className='titleImage'>
                    <h1>{pokemonTitle}</h1>
                    <img src={pokemonImage} alt={pokemonTitle} />
                </div>
                    <h2>Habilidades</h2>
                <div className='abilities'>
                    <h3>{pokemonAbility01}</h3>
                    <h3>{pokemonAbility02}</h3>
                </div>
                    <div className='imageEvolution'> 
                    <div>
                        {/* renderização condicional */}
                            <h4>{pokemonEvolution}</h4>
                            <img src={imageEvolution} alt="evolução" />
                    </div>
                    
                    
                    <div>
                        {/* renderização condicional */}
                            <h4>{pokemonEvolution2}</h4>
                            <img src={imageEvolution2} alt="evolução" />
                    </div>
                    </div>
            </div>
        </div>
    )
}
}

export default pokeDetails;