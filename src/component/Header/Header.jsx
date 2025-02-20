import React from 'react'
import { MdDarkMode,MdSunny } from "react-icons/md";
import ButtonHeader from './ButtonHeader';
const Header = ({inCart,increment,dark,reset,empty,theme,addedProducts}) => {
    return (
        <div className={`navbar  px-4 flex flex-col md:flex-row gap-4  ${theme?'bg-gradient-to-r from-[#ff512f] to-[#dd2476]' : 'bg-[#1E3A8A]'} m` }>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">mostafa mahmoud</a>
          </div>
          <div className={`flex justify-between flex-1 `}>
           { addedProducts.map((product)=>(
              <ButtonHeader product={product} increment={increment} />
              ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
            </div>
            
            <div className="flex gap-2">
              <button className="btn btn-circle btn-sm" onClick={() => dark()}>
                {theme ? <MdSunny /> : <MdDarkMode />}
              </button>
              <button className="btn btn-error btn-sm" onClick={() => reset()}>
                Reset
              </button>
              <button className="btn btn-warning btn-sm" onClick={() => empty(false)}>
                Empty
              </button>
            </div>
          </div>
        </div>
      )
}

export default Header
    