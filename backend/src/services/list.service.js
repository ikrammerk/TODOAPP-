import List from '../models/list.model.js';

const getLists = async () => {
  try {
    return await List.find();
  } catch (e) {
    throw Error('Error while fetching lists.');
  }
}

const getList = async (listId) => {
  try {
    return await List.findOne({ _id: listId });
  } catch (e) {
    throw Error('Error.');
  }
}

const createList = async (listToCreate) => {
  try {
    const newList = new List(listToCreate)
    await newList.save()
    return getLists();
  } catch (e) {
    throw Error('Error.');
  }
}

const updateList = (listToUpdate) => {
  try {
    List.findOneAndUpdate(listToUpdate);
    return listToUpdate;
  } catch (e) {
    throw Error('Error.');
  }
}

const deleteList = async (listId) => {
  try {
    await List.deleteOne({ _id: listId });
  } catch (e) {
    throw Error('Error.');
  }
}

export { getLists, getList, createList, updateList, deleteList }