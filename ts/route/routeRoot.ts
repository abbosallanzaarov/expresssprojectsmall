import { Router } from "express";
import { users } from "../storage/userStorage";
import { tasks } from '../storage/tasksStorage';

const  route = Router();

route.get('/' , (req, res) => {
    res.redirect('/tasks')
})
route.get('/tasks' , (req, res) => {
    res.render('tasks' ,{users})
})
export default route