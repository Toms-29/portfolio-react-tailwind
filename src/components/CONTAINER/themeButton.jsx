import { useState, useEffect } from "react"

const ThemeButton = ({ toggleTheme, theme }) => {
    const ligth_mode = './assets/images/ligthMode_icon.png'
    const dark_mode = './assets/images/darkMode_icon.png'

    const [imgMode, setImgMode] = useState(ligth_mode)

    useEffect(() => {
        if (theme === 'ligthTheme') {
            setImgMode(dark_mode)
        } else {
            setImgMode(ligth_mode)
        }
        return () => {
        }
    }, [theme])



    return (
        <>
            <button onClick={toggleTheme}>
                <img className='w-12 hover:drop-shadow-white' src={imgMode} alt='Boton para cambiar el tema ' />
            </button>


        </>
    )
}

export default ThemeButton