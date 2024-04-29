import { createTask } from '@/utils/actions'
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'
import React from 'react'


const TaskForm = () => {

  return (
    <form action={createTask}>
      <div className='join w-full'>
        <input 
        type="text" 
        placeholder='type here ' 
        name='content' 
        className='input input-bordered join-item w-full' 
        required
        />
        <button className='btn btn-primary join-item' type='submit'>
          create Task  
        </button>      
      </div>
    </form>
  )
}

export default TaskForm