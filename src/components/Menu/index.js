import React from "react"
import Logo from "../../assets/img/pbflix.png"
import Button from './components/Button'
import './style.css'

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img
          className="Logo"
          src={Logo}
          alt="pbflix escrito em fonte vermelha com um formato de arco enflexado para cima"
        />
      </a>

      <Button className="ButtonLink" link="/" >
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu
