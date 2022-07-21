import React, { Component } from 'react'
import '../styles/pagination.css'

class Pagination extends Component{
  constructor(props){
    super()
  }
  render(){
    const { page, pageTotal, leftClick, rightClick } = this.props
    return(
      <div className='PaginationContainer'>
        <button onClick={leftClick}>Voltar</button>
        <div className='pages'>{page+1} de {pageTotal}</div>
        <button onClick={rightClick} >Avançar</button>
      </div>
    )
  }
}
export default Pagination;