import { useState, useEffect } from 'react'
import { DarkMode } from '../icons/DarkMode.jsx'
import { LightMode } from '../icons/LightMode.jsx'
const htmlNode = document.querySelector('html')

function ThemeMode(){
  const [darkMode, setDarkMode] = useState(false)

  const toogleMode = () => {
    setDarkMode(prev => !prev)
  }

  const checkMode = () => {
    darkMode
      ? htmlNode.classList.add('dark')
      : htmlNode.classList.remove('dark')
  }

  useEffect(() => {
    checkMode()
  }, [darkMode])

  return (
    <div className="flex gap-2 items-center">
      <button className="self-baseline" onClick={toogleMode}>
        {darkMode ? <DarkMode /> : <LightMode />}
      </button>
      <span className="text-xl font-semibold dark:text-white">Dark Mode</span>
    </div>
  )
}

export default ThemeMode
