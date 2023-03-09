import React, { useState } from 'react'
import styled from 'styled-components'


export function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>


        <nav className='menu-contenedor'>
          <div className='contenedor-nav'>
          <ul className='menu-navegador'>
          <li className='menu-inicio'>
          <img src="pikachu.png" alt="Inicio" class="nav-imagen-icono" />
              <a>Inicio</a>
          </li>
          <li className='menu-poquedex'>
          <img src="pokebola.png" alt="Inicio" class="nav-imagen-icono" />
              <a>Poquedex</a>
          </li>
          <li className='menu-aplicaciones'>
          <img src="entrenador-pokemon.png" alt="Inicio" class="nav-imagen-icono" />
              <a>Aplicaciones</a>
          </li>
 
        </ul>
        </div>
        </nav>
        
         
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
 
  }
  
  `











   