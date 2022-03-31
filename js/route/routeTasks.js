"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasksStorage_1 = require("../storage/tasksStorage");
const route = (0, express_1.Router)();
route.get('/', (req, res) => {
    res.render('tasks', { tasks: tasksStorage_1.tasks });
});
route.post('/', (req, res) => {
    (0, tasksStorage_1.addTasks)(req.body.title, req.body.userId, req.body.content);
    res.redirect('/tasks');
});
exports.default = route;
