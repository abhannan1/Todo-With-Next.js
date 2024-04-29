import EditForm from '@/components/EditForm'
import { IconBxArrowBack } from '@/components/Icons'
import { getTaskById } from '@/utils/actions'
import Link from 'next/link'
import React from 'react'

const SingleTaskPage = async({params}) => {
    const task = await getTaskById(params.id)
    
  return (
    <div className='max-w-xl'>
        <Link href={'/tasks'} className='btn btn-accent mb-4'>
        <IconBxArrowBack/>
            Back
        </Link>
        <EditForm task={task}/>
    </div>
  )
}

export default SingleTaskPage

