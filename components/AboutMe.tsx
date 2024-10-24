import React from 'react'

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-[90%] py-40" id="about">
        <div className="md:w-2/3">
          <h1 className="heading">
            Sobre <span className="text-pink-400">mim</span>
          </h1>
            <p className="text-[20px] mt-5 pl-50">
              Meu nome é João Ricardo, um desenvolvedor de software, tenho 20 anos e atualmente sou graduando em Bacharelado em Ciência da Computação na Universidade Tecnológica Federal do Paraná (UTFPR-CM).
              Busco expandir minha experiência profissional nas diferentes áreas da tecnologia e em desenvolvimento de software, além de estar disposto a aprender e ganhar experiência e networking na carreira profisional.
              Tenho proeficiência B1+ em inglês, além da proeficiência básica em espanhol e alemão, os quais sou capaz de falar e compreender os idiomas. Atualmente, utilizo as tecnologias NextJS, React e TypeScript tanto no ramo acadêmico e profissional. Sou uma pessoa que valoriza a qualidade e a organização no trabalho.
            </p>
        </div>

        <div className="mt-6 md:mt-0 md:ml-6">
          <img src="https://avatars.githubusercontent.com/u/107425883?v=4.png" alt="my photo from github" className="w-32 h-32 md:w-60 md:h-60 rounded-full"/>
        </div>
    </div>
  )
}

export default AboutMe