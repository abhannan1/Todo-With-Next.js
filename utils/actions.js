'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { TaskSchema } from "./definitions"
// import { NextResponse } from "next/server"
const { default: prisma } = require("./db")

export const getAllTasks = async() =>{
    return await prisma.task.findMany({
        orderBy:{
            createdAt:'desc'
        }
    })
}
export const getTaskById = async(id) =>{
    return prisma.task.findUnique({
        where:{
            id,
        }
    })
}


export const createTask = async(formData)=>{
    const content = formData.get('content')

    await prisma.task.create({
        data:{
            content
        }
    })

    revalidatePath('/task')
} 
export const createTaskCustom = async(prevState,formData)=>{
    // await new Promise((resolve)=>setTimeout(resolve, 1000))

    const content = formData.get('content')

    try {

        const validatedFields = TaskSchema.safeParse({
            content
        })

        if(!validatedFields.success){
            return {
                status:"error",
                message: validatedFields.error.flatten().fieldErrors.content[0]
            }
        }

        await prisma.task.create({
            data:{
                content
            }
        })
    
        revalidatePath('/task')
        return {
            status:'success',
            message: "Task added Successfully"
        }
    } catch (error) {
        return {
            status:"error",
            message: "Failed to add the task"
        }
    }
    
} 

export const updateTask = async(formData, request)=>{
    const id = formData.get('id')
    const content = formData.get('content')
    const completed = formData.get('completed')

    await prisma.task.update({
        where:{
            id
        },
        data:{
            content,
            completed:completed === 'on'? true : false
        }
    })
    revalidatePath('/tasks')
    redirect('/tasks')
    // return NextResponse.redirect(new URL('/task', request.url))
} 


// export const deleteTask = async(id, formData) =>{
//     await prisma.task.delete({
//         where:{
//             id
//         }
//     })
//     revalidatePath('/task')
// }

export const deleteTask = async(formData) =>{
    const id = formData.get('id')
    await prisma.task.delete({
        where:{
            id
        }
    })
    revalidatePath('/task')
}