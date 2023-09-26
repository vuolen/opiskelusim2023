import { useState } from 'react'
import './App.css'
import { createStudent } from './game/student'
import { studyAction } from './game/base'

function useGame() {
  const [student, setStudent] = useState(createStudent())
  const [latestMessage, setLatestMessage] = useState("Tervetuloa opiskelusimulaattoriin! Valmistu keräämällä 300 opintopistettä")

  const actions = {
    study: studyAction
  }

  function doAction(actionName: keyof typeof actions) {
    const [newStudent, message] = actions[actionName](student)
    setStudent(newStudent)
    setLatestMessage(message)

  }

  return [student, doAction, latestMessage] as const
}

function App() {
  const [student, doAction, latestMessage] = useGame()

  return <div className='App'>
    <h1>Opiskelusimulaattori</h1>
    <div className="stats">
      <span>

      Opintopisteet: {student.credits}
      </span>
<span>

      Hyvinvointi: {student.wellbeing}
</span>
    </div>
    <div>
      <button onClick={() => doAction("study")}>Opiskele</button>
    </div>
    <textarea readOnly={true} value={latestMessage}></textarea>
  </div>
}

export default App
