import prisma from '@/utils/db'
import React from 'react'

const prismaHandlers = async ()=>{
  await prisma.task.create({
    data:{
      content:"Wake up"
    }
  })

  const allTasks = prisma.task.findMany({
    orderBy:{
      createdAt:'desc'
    }
  })

  return allTasks
}

const PrismaExample = async() => {
  const tasks = await prismaHandlers()
  return (
    <div>
      <h1 className='text-7xl'>
        Prisma Example
      </h1>
        {tasks.map((task)=>{
          return (
            <>
              <h1 className='text-5xl mb-4'> 😎 {task.content}</h1>
            </>
          )
        })}
    </div>
  )
}

export default PrismaExample