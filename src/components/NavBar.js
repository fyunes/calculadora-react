import React from 'react'

const NavBar = () => {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img className='logo' src='https://cdn.discordapp.com/attachments/781224167524925460/1058148734501924994/calculadora.png' /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="https://www.linkedin.com/in/francoyunes/"><img className='logo' src='https://cdn.discordapp.com/attachments/781224167524925460/1058183862183809084/linkedin.png'/></a>
        <a class="nav-item nav-link active" href="https://github.com/fyunes/"><img className='logo' src='https://cdn.discordapp.com/attachments/781224167524925460/1058184365319929946/github-sign.png'/></a>
      </div>
    </div>
  </nav></div>
  )
}

export default NavBar