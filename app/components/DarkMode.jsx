import { CgDarkMode } from "react-icons/cg";
import { useTheme } from 'next-themes'

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme()
    return (
        <div className="relative">
            <button onClick={() => { setTheme(theme === 'light' ? 'dark' : 'light')}} 
            className='gap-3.5 bg-bkgcolorlight dark:bg-bkgcolor text-txtcolorlight dark:text-txtcolor px-3 py-3 mt-5 rounded-3xl transition-opacity duration-200 w-14 h-14 hover:opacity-70'>
                <CgDarkMode className='w-7 h-7 mx-auto'/>
            </button>
        </div>
    )
}
