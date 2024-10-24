import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'


const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img 
                src="/footer-grid.svg" 
                alt="grid" 
                className="w-full h-full opacity-50"
                />

        </div>

        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Gostou do trabalho? Quer fazer parte da <span className="text-[rgba(255,172,209)]">diferença</span>?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Contate-me hoje e vamos discutir como eu posso te ajudar no seu projeto
          </p>
          <a href="https://api.whatsapp.com/send?phone=5518996953530" target="_blank">
                <MagicButton 
                  title="Vamos entrar em contato"
                  icon={<FaLocationArrow />}
                  position='left'
                />
          </a>

      </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 João Siqueira</p>

            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                        <a href={profile.link}>
                            <img src={profile.img} alt="icons" width={20} height={20} />
                        </a>
                    </div> 
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer