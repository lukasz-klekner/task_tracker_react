import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'First task', reminder: true },
    { id: 2, text: 'Second task', reminder: true },
    { id: 3, text: 'Third task', reminder: false },
    { id: 4, text: 'Fourth task', reminder: true },
    { id: 5, text: 'Fifth task', reminder: false },
  ])

  const deleteTask = (id) => {
    const taskToDo = tasks.filter((task) => task.id !== id)
    setTasks(taskToDo)
  }

  const toggleRemainder = (id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    )
    setTasks(newTasks)
  }
  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
      ) : (
        'No tasks to do! ^^'
      )}
    </div>
  )
}

export default App
