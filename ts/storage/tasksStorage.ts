import { nanoid } from "nanoid"

export type Tasks = {
    id:string,
    title:string,
    userId:string,
    content:string
}
export const  tasks:Tasks[] = []

export function addTasks(title: string, userId: string , content:string){
    let  task:Tasks = {
        id:nanoid(),
        title:title,
        userId:userId,
        content:content
    }
    tasks.push(task)
}