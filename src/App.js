import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About'

import AddTask from './components/AddTask'
import Footer from './components/Footer'
import Header from './components/Header'
import Tasks from './components/Tasks'

const BASE_URL = 'http://localhost:5000/tasks'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  const addTask = async (task) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const data = await response.json()

    setTasks([...tasks, data])
  }

  const deleteTask = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    })

    const taskToDo = tasks.filter((task) => task.id !== id)
    setTasks(taskToDo)
  }

  const toggleRemainder = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`)
    const data = await response.json()

    const updatedTask = { ...data, reminder: !data.reminder }

    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })

    const result = await res.json()

    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, reminder: result.reminder } : task
    )
    setTasks(newTasks)
  }

  useEffect(async () => {
    const response = await fetch(BASE_URL)
    const data = await response.json()

    setTasks(data)
  }, [])
  return (
    <Router>
      <div className='container'>
        <Header
          title='Task tracker'
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleRemainder}
                />
              ) : (
                'No tasks to do! ^^'
              )}
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
