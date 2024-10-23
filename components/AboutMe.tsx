import React from 'react'

const AboutMe = () => {
  return (
    <div className="flex items-center justify-center w-[90%] py-40" id="about">
        <div className="font">
          <h1 className="heading">
            Sobre mim
          </h1>
            <p className="text-[20px] mt-5 pl-50">
              Meu nome é João Ricardo, um desenvolvedor de software, tenho 20 anos e atualmente sou graduando em Bacharelado em Ciência da Computação na Universidade Tecnológica Federal do Paraná do Campus de Campo Mourão (UTFPR-CM).
              Busco expandir minha experiência profissional nas diferentes áreas da tecnologia e em desenvolvimento de software, além de estar disposto a aprender e ganhar experiência e networking na carreira profisional. 
            </p>
        </div>

        <div>
          <img src="https://avatars.githubusercontent.com/u/107425883?v=4.png" alt="eu" className="max-w-[250%] max-h-[250%] rounded-full"/>
        </div>
    </div>
  )
}

export default AboutMe