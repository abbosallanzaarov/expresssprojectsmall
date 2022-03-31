"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userStorage_1 = require("../storage/userStorage");
const route = (0, express_1.Router)();
route.get('/', (req, res) => {
    res.render('users', { users: userStorage_1.users });
});
route.post('/', (req, res) => {
    (0, userStorage_1.addUser)(req.body.name, req.body.surname);
    res.redirect('/users');
});
exports.default = route;
