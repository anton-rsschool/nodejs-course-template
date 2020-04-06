const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const getTask = id => tasksRepo.getTask(id);

const createTask = task => tasksRepo.createTask(task);

const updateTask = (boardId, taskId, task) =>
  tasksRepo.updateTask(boardId, taskId, task);

const deleteTask = id => tasksRepo.deleteTask(id);

module.exports = { getAll, getTask, createTask, updateTask, deleteTask };
