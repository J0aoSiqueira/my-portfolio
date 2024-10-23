import React, { ReactNode } from 'react'

const MagicButton = ({
    title, icon, position, otherClasses    
}: {
    title: string; icon: ReactNode; position: string; otherClasses?: string;
}) => {
  return (
    <button className={`flex shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(255,172,209,0.9)] px-9 py-2 rounded-full text-white font-medium w-full transition duration-200 ease-linear border-2 border-[rgba(255,172,209)] items-center gap-2 ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
    </button>
  )
}

export default MagicButton