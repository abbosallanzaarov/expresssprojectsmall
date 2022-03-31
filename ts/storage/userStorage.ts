import { nanoid } from 'nanoid'

export type User = {
    id: string,
    name: string,
    surname: string
}
export const users: User[] = []

export function addUser(name: string, surname: string) {
    let user: User = {
        id: nanoid(),
        name: name,
        surname: surname
    }
    users.push(user)
}
