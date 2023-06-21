import React from 'react'
import SingleItem from './SingleItem'
import { nanoid } from 'nanoid'

const Items = ({ tasks, toggleDone, delTask }) => {
   return (
      <section className='items'>
         {tasks.map((task) => {
            return (
               <SingleItem
                  key={nanoid()}
                  task={task}
                  toggleDone={toggleDone}
                  delTask={delTask}
               />
            )
         })}
      </section>
   )
}

export default Items
