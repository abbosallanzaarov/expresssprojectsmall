
import express from 'express'
import routeRoot from './route/routeRoot';
import Userroute from './route/routeUser'
import Tasksroute from './route/routeTasks'

//express config
const app = express();
app.use(express.json())
app.use(express.urlencoded())


//handlebars
import { engine } from 'express-handlebars';
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

//route register
app.use('/' , routeRoot)
app.use('/users' , Userroute)
app.use('/tasks' , Tasksroute)


















app.listen(5050 , () => {
    console.log('ishga tushdi localhost:5050');
})

