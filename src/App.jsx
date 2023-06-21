import { useState } from 'react'
import Form from './Form'
import Items from './Items'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
   const [tasks, setTasks] = useState([{ desc: 'Go shoppping', done: false }])

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

   return (
      <main className='section-center'>
         <Form addToList={addToList} />
         <Items tasks={tasks} toggleDone={toggleDone} delTask={delTask} />
         <ToastContainer />
      </main>
   )
}

export default App
