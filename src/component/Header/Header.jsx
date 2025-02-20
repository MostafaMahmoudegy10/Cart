import React from 'react'
import { MdDarkMode,MdSunny } from "react-icons/md";
import ButtonHeader from './ButtonHeader';
const Header = ({inCart,increment,dark,reset,empty,theme,addedProducts}) => {
    return (
        <div className='text-center overflow'>       
        <div className={`navbar  px-4 flex flex-col md:flex-row gap-4  ${theme?'bg-gradient-to-r from-[#ff512f] to-[#dd2476]' : 'bg-[#1E3A8A]'} ` }>
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">mostafa mahmoud</a>
          </div>
          <div className={`flex justify-between w-full  flex-1 lg:mt-0 mt-2 md:flex-row flex-col sm:w-[100%]`}>
           { addedProducts.map((product)=>(
              <ButtonHeader key={product.id} product={product} increment={increment} />
              ))}
          </div>
          <div className="flex items-center gap-4 lg-mb-0 ">
            <div className="dropdown dropdown-end">
            </div>
            <div className="flex gap-2 md:flex-row flex-col items-center">
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
        </div>

      )
}

export default Header
    