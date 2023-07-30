import { useTheme } from 'next-themes'
import { useState } from 'react'

const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme()

    // On Click Handlers
    const onChangeThemeClicked = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div>
            <button className=''
            onClick={onChangeThemeClicked}>Change Theme</button>
        </div>
  )
}

export default ThemeSwitcher