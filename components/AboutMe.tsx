import React from 'react'

const AboutMe = () => {
  return (
    <div className="w-full absolute" id="about">
        <div>
          <h1 className="text-center heading">
            Sobre mim
          </h1>
            <p className="text-justify justify-left">
              Meu nome é João Ricardo, um desenvolvedor de software, tenho 20 anos e atualmente sou graduando em Bacharelado em Ciência da Computação na Universidade Tecnológica Federal do Paraná do Campus de Campo Mourão (UTFPR-CM).
              Busco expandir minha experiência profissional nas diferentes áreas da tecnologia e em desenvolvimento de software, além de estar disposto a aprender e ganhar experiência e networking na carreira profisional. 
            </p>
        </div>

        <div className="w-32 h-32 float-right">
          <img src="https://avatars.githubusercontent.com/u/107425883?v=4.png" alt="eu" className="rounded-full"/>
        </div>
    </div>
  )
}

export default AboutMe