import { useState } from "react"
import Card from "./components/Card"
import ToggleBtn from "./components/ToggleBtn"
import { ThemeContext } from "./context/ThemeContext"
function App() {
  const [dark, setDark] = useState(false);
  return (
    <ThemeContext.Provider value={{dark, setDark}}>
      <div className={`h-screen w-screen flex flex-col justify-center items-center ${dark ?"dark" : ""}`}>
        <ToggleBtn />
        <Card />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
