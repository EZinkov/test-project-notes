import { useState } from "react"
import "./App.css"
import Sidebar from "./components/Sidebar"
import Workspace from "./components/Workspace"

const App = () => {
  const [notes, setNotes] = useState([])

  const onAddNote = () => {
    console.log("add")
  }
  return (
    <div className="App">
      <Sidebar notes={notes} onAddNote={onAddNote} />
      <Workspace />
    </div>
  )
}

export default App
