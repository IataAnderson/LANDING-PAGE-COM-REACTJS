import { useState } from 'react'
import './App.css'
import Main from './Componentes/Main'

function App() {
    return (
    <div className="App">
      <Main />
      
      <div className='conteudo'>
        <div className='center'>
          <div className='conteudo-single'>
            <h3>Titulo da chamada</h3>
            <p> Aqui o meu conteúdo de exemplo</p>
          </div>
          <div className='conteudo-single'>
            <h3>Titulo da chamada</h3>
            <p> Aqui o meu conteúdo de exemplo</p>
          </div>
          <div className='conteudo-single'>
            <h3>Titulo da chamada</h3>
            <p> Aqui o meu conteúdo de exemplo</p>
          </div>
          <div className='conteudo-single'>
            <h3>Titulo da chamada</h3>
            <p> Aqui o meu conteúdo de exemplo</p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default App
