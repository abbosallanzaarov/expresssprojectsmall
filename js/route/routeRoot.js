"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userStorage_1 = require("../storage/userStorage");
const route = (0, express_1.Router)();
route.get('/', (req, res) => {
    res.redirect('/tasks');
});
route.get('/tasks', (req, res) => {
    res.render('tasks', { users: userStorage_1.users });
});
exports.default = route;
