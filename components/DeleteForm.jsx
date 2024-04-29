'use client'
import { deleteTask } from '@/utils/actions'
import React from 'react'
import {useFormStatus} from 'react-dom' 

const DeleteBtn = () =>{
  const {pending} = useFormStatus()

  return (
    <button disabled={pending} type='submit' className='btn btn-error btn-xs'>{pending ? "deleting..." : "delete"}</button>
  )
}

const DeleteForm = ({id}) => {
  // const deleteTaskWithId = deleteTask.bind(null, id)
  

  return (
    <div>
      <form action={deleteTask}>
        <input type="hidden" name='id' id='id' className='' value={id}/>
        <DeleteBtn/>
      </form>
    </div>
  )
}

export default DeleteForm