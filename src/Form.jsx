import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Form = ({ addToList }) => {
   const [newTask, setNewTask] = useState({
      id: '',
      desc: '',
      done: null,
   })

   const handleForm = (e) => {
      setNewTask((prev) => ({
         id: nanoid(),
         desc: e.target.value,
         done: false,
      }))
   }
   const submitForm = (e) => {
      e.preventDefault()
      const { done, desc } = newTask
      if (done === null && desc === '') {
         toast.error('Enter valid task!')
         return
      }
      addToList(newTask)
      setNewTask({
         id: '',
         desc: '',
         done: null,
      })
      toast.success('Successfully added')
   }

   return (
      <section>
         <form onSubmit={submitForm}>
            <h4>Grocery Bud</h4>
            <div className='form-control'>
               <input
                  type='text'
                  name='item'
                  className='form-input'
                  value={newTask.desc}
                  onChange={handleForm}
               />
               <button type='button' className='btn' onClick={submitForm}>
                  Add Item
               </button>
            </div>
         </form>
      </section>
   )
}

export default Form
