import React from 'react'

function SingleItem({ task, toggleDone, delTask }) {
   const { id, done, desc } = task
   const parStyle = done ? { textDecoration: 'line-through' } : {}
   return (
      <article className='single-item'>
         <input
            type='checkbox'
            checked={task.done}
            name='done'
            id={id}
            onClick={() => toggleDone(id)}
         />
         <p style={parStyle}>{desc}</p>
         <button
            type='button'
            className='btn remove-btn'
            onClick={() => delTask(id)}
         >
            delete
         </button>
      </article>
   )
}

export default SingleItem
