import { Router } from "express";
import { users , addUser } from '../storage/userStorage';

const route = Router();

route.get('/' , (req, res) => {
    res.render('users' , {users})
})
route.post('/' , (req, res) => {
    addUser(req.body.name , req.body.surname)
    res.redirect('/users')
})
export default route