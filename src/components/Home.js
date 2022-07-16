import React, { Component } from 'react'
import { fetchPokeAPI } from '../services/PokeAPI'
import CardPokemon from './CardPokemon'
import '../styles/Home.css'

class Home extends Component{
    constructor() {
        super()
        this.state = {
            inputPokemons:'',
            arrayPokemons: [],
            msg:false
        }
    }
componentDidMount(){
    this.returnAPI()
}




    // handleChange = ({ target }) => {
    //     const { inputPokemons } = this.state
    //     const { value } = target
    //     this.setState({
    //         inputPokemons:value
    //     },() =>{
    //         const { inputPokemons, arrayPokemons} = this.state
    //         const newInput = arrayPokemons.filter((ele) => ele.name.startsWith(inputPokemons))
    //             if (inputPokemons ===''|| arrayPokemons.length=== 0){
    //                 this.returnAPI()
    //             }else{
    //                 this.setState({
    //                     arrayPokemons:newInput
    //                 })
    //             }
    //     })
    // }

   
    handleChange = ({ target }) => {
        const { inputPokemons } = this.state
        const { value } = target
        this.setState({
            inputPokemons:value
        })
        // ,() =>{
        //     const { inputPokemons, arrayPokemons} = this.state
        //     const newInput = arrayPokemons.filter((ele) => ele.name.startsWith(inputPokemons))
        //         if (inputPokemons ===''){
        //             this.setState({
        //                 msg:false
        //             })
        //             this.returnAPI()
        //         }else if(arrayPokemons.length=== 0){
        //             this.setState({
        //                 msg:true,
        //             })
        //             this.returnAPI()
        //         }else{
        //             this.setState((prevState) => ({
        //                 arrayPokemons:newInput
        //             }))
        //         }
        // })
    }

    returnAPI = async () =>{
        const { inputPokemons, arrayPokemons } = this.state
        const array = []
        
            for (let index = 1; index <= 24; index++) {
                const response =  await fetchPokeAPI(index)
              //   const result =  await response.results
                array.push(response)
            }
            this.setState({
              arrayPokemons: array, 
            })
        }
        
     
    //  pesquisar =  () =>{
    //     const { inputPokemons, arrayPokemons, arrayP } = this.state

        
    //        const newInput = arrayPokemons.filter((ele) => ele.name.includes(inputPokemons))
            
    //             if (inputPokemons ===''|| arrayPokemons.length=== 0){
    //                 this.returnAPI()
    //             }else{
    //                 this.setState({
    //                     arrayPokemons:newInput
    //                 })
    //             }
    //  }
    
    render(){
        const { arrayPokemons, msg, inputPokemons } = this.state
        return(
            <div>
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
                            <CardPokemon
                                nome = {ele.name}
                                image = {ele.sprites.other.home.front_default}
                                key = {ele.id}
                                />
                        ))
                    }
                </div>
                
            </div>
        )
    }
}
export default Home;