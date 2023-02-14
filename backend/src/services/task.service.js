import List from '../models/list.model.js';

const getTasks = async (listId) => {
  try {
    console.log(listId)
    return await List.find({
      _id: listId
    });
  } catch (e) {
    throw Error('Error while fetching tasks.');
  }
}

const getTask = async (listId, taskId) => {
  try {
    return await List.findOne({ _id: listId });
  } catch (e) {
    throw Error('Error.');
  }
}

const createTask = async (listId, taskToCreate) => {
  try {
    await List.updateOne({ _id: listId }, { $push: { "tasks": taskToCreate } });
    return getTasks();
  } catch (e) {
    throw Error('Error.');
  }
}

const updateTask = async (listId, taskToUpdate) => {
  try {
    console.log(listId, taskToUpdate)
    await List.updateOne({ _id: listId, "tasks._id": taskToUpdate._id }, {
      $set: {
        "tasks.$.label": taskToUpdate.label,
        "tasks.$.done": taskToUpdate.done
      }
    });
    return taskToUpdate;
  } catch (e) {
    console.log(e)
    throw Error('Error.');
  }
}

const deleteTask = async (listId, taskId) => {
  try {
    await List.updateOne(
      { _id: listId },
      {
        $pull: { tasks: { _id: taskId } }
      },
    );
  } catch (e) {
    throw Error('Error.');
  }
}

export { getTasks, getTask, createTask, updateTask, deleteTask }