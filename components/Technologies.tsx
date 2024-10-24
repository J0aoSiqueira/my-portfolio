import { technologies } from '@/data'
import React from 'react'

const Technologies = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="technologies">
      <div>
        <h1 className="heading">
          <span className="text-pink-400">Tecnologias</span> que utilizo atualmente
        </h1>
      </div>
      <div className="grid grid-cols-6 gap-5 items-center justify-center my-10">
        {technologies.map((tech) => (
                    <div key={tech.id} className={"p-5 grid justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"}>
                            <img src={tech.img} alt="icons" width={50} height={50} className="items-center"/>
                            <p className="text-center">{tech.name}</p>
                    </div> 
                ))}
      </div> 
    </div>
  )
}

export default Technologies