import { useState, useEffect } from 'react'

import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    setTasks([...tasks, { id, ...task }])
  }

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

  useEffect(async () => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()

    setTasks(data)
  }, [])
  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
      ) : (
        'No tasks to do! ^^'
      )}
    </div>
  )
}

export default App
