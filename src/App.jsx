import { useState } from 'react'
import { ExerciseContainer, Timer } from './components'
import exercises from './components/Exercise/exerciseData'
import './App.css'

function App() {


  return (
    <>
    <div className="wrapper">
    <Timer />
    <ExerciseContainer exercises={exercises} />
    </div>
    </>
  )
}

export default App
