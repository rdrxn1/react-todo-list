import { CgDarkMode } from "react-icons/cg";
import { useState } from 'react';

export default function SVGButton({ toggleTheme }) {
    return (
        <div className="fixed top-0 right-44">
            <button onClick={toggleTheme} className='gap-3.5 bg-bkgcolor text-txtcolor px-3.5 py-3 mt-5 rounded-3xl transition-opacity duration-200 hover:opacity-70'>
                <CgDarkMode className='w-6 h-6'/>
            </button>
        </div>
    )
}
