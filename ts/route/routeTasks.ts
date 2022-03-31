import { Router } from "express";
import { addTasks , tasks } from "../storage/tasksStorage";

const route = Router();

route.get('/' , (req, res) => {
    res.render('tasks' ,{tasks} )
})
route.post('/' , (req, res) => {
    addTasks(req.body.title , req.body.userId , req.body.content)
    res.redirect('/tasks')
})
export default route