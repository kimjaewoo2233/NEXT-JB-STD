import React from 'react'
import { LogoText } from '../icons';

const Logo = () => {
  return (
    <div className='flex flex-row gap-3 items-center'>
        <img src={`/LogoImg.png`} alt="Logo" />
        <LogoText/>
    </div>
  )
}

export default Logo;
