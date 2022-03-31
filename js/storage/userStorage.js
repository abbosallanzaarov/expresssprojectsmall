"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.users = void 0;
const nanoid_1 = require("nanoid");
exports.users = [];
function addUser(name, surname) {
    let user = {
        id: (0, nanoid_1.nanoid)(),
        name: name,
        surname: surname
    };
    exports.users.push(user);
}
exports.addUser = addUser;
