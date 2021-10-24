import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTask] = useState([
    { id: 1, text: 'First task' },
    { id: 2, text: 'Second task' },
    { id: 3, text: 'Third task' },
    { id: 4, text: 'Fourth task' },
    { id: 5, text: 'Fifth task' },
  ])
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App
