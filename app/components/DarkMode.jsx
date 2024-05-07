import { CgDarkMode } from "react-icons/cg";
import { useState } from 'react';

export default function SVGButton({ toggleTheme }) {
    return (
        <div className="absolute top-0 right-44">
            <button onClick={toggleTheme} className='gap-3.5 bg-bkgcolor text-txtcolor px-3 py-3 mt-5 rounded-3xl transition-opacity duration-200 w-14 h-14 hover:opacity-70'>
                <CgDarkMode className='w-7 h-7 mx-auto'/>
            </button>
        </div>
    )
}
