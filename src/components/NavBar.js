import React from 'react'

const NavBar = () => {
  return (
    
      <nav className='navBar'>
      <ul>
    <li><img className='logo' src='https://cdn.discordapp.com/attachments/781224167524925460/1058148734501924994/calculadora.png' alt='Calculadora'/></li>    
    <div className="social">
    <li> <a href="https://www.linkedin.com/in/francoyunes/"><img className='logo' src='https://cdn.discordapp.com/attachments/781224167524925460/1058183862183809084/linkedin.png' alt='Linkedin'/></a> </li> 
    <li>  <a href="https://github.com/fyunes/"><img className='logo' src='https://cdn.discordapp.com/attachments/781224167524925460/1058184365319929946/github-sign.png' alt='Github'/></a> </li>          
    </div>
    </ul>
  </nav>
  
  )
}

export default NavBar