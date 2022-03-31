"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTasks = exports.tasks = void 0;
const nanoid_1 = require("nanoid");
exports.tasks = [];
function addTasks(title, userId, content) {
    let task = {
        id: (0, nanoid_1.nanoid)(),
        title: title,
        userId: userId,
        content: content
    };
    exports.tasks.push(task);
}
exports.addTasks = addTasks;
