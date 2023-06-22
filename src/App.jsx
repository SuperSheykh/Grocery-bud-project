import { useEffect, useState } from 'react'
import Form from './Form'
import Items from './Items'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
   const [tasks, setTasks] = useState(() => {
      return JSON.parse(localStorage.getItem('tasks')) || []
   })

   const addToList = (task) => {
      setTasks((prev) => [...prev, task])
   }

   const toggleDone = (id) => {
      const i = tasks.findIndex((task) => task.id === id)
      const newList = tasks.map((task, index) =>
         index === i ? { ...task, done: !task.done } : task
      )
      setTasks(newList)
   }

   const delTask = (id) => {
      setTasks((prev) => prev.filter((task) => task.id !== id))
   }

   useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks))
   }, [tasks])
   return (
      <main className='section-center'>
         <Form addToList={addToList} />
         <Items tasks={tasks} toggleDone={toggleDone} delTask={delTask} />
         <ToastContainer />
      </main>
   )
}

export default App
