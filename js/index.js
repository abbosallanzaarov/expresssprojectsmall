"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routeRoot_1 = __importDefault(require("./route/routeRoot"));
const routeUser_1 = __importDefault(require("./route/routeUser"));
const routeTasks_1 = __importDefault(require("./route/routeTasks"));
//express config
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
//handlebars
const express_handlebars_1 = require("express-handlebars");
app.engine('.hbs', (0, express_handlebars_1.engine)({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');
//route register
app.use('/', routeRoot_1.default);
app.use('/users', routeUser_1.default);
app.use('/tasks', routeTasks_1.default);
app.listen(5050, () => {
    console.log('ishga tushdi localhost:5050');
});
