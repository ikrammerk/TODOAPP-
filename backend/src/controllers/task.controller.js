import * as TaskService from "../services/task.service.js";

export const getTasks = async (req, res) => {
  try {
    const { listId } = req.params;
    const tasks = await TaskService.getTask(listId);
    return res.status(200).json(tasks);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export const getTask = async (req, res) => {
  try {
    const { taskId, listId } = req.params;
    const task = await TaskService.getTask(listId, taskId);
    return res.status(200).json({ status: 200, data: task, message: `Task with id ${taskId} of list with id: ${listId} has been successfully retrieved` });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export const createTask = async (req, res) => {
  try {
    const { listId } = req.params;
    const taskToCreate = req.body;
    const newTask = await TaskService.createTask(listId, taskToCreate);
    return res.status(200).json({ status: 200, data: newTask, message: `New Task has bee added succesfully to list with id ${listId}` });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export const deleteTask = async (req, res) => {
  try {
    const { listId, taskId } = req.params;
    await TaskService.deleteTask(listId, taskId);
    return res.status(200).json({ status: 204, message: `List with id ${taskId} of list with id: ${listId} has been deleted succesfully` });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

export const updateTask = async (req, res) => {
  try {
    const { listId } = req.params;
    const taskUpdated = await TaskService.updateTask(listId, req.body);
    return res.status(200).json({ status: 200, data: taskUpdated, message: `Task with id ${req.body.taskId} of list with id: ${listId}  has been updated succesfully` });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

