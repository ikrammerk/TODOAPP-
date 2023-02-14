import * as ListService from "../services/list.service.js";

export const getLists = async (req, res) => {
  try {
    const lists = await ListService.getLists();
    return res.status(200).json(lists);
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}
export const getList = async (req, res) => {
  try {
    const { listId } = req.params;
    const list = await ListService.getList(listId);
    return res.status(200).json({ status: 200, data: list, message: `List with id ${listId} has been successfully retrieved` });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}
export const createList = async (req, res) => {
  try {
    const listToCreate = req.body;
    const newList = await ListService.createList(listToCreate);
    return res.status(200).json({ status: 200, data: newList, message: "New List has bee created succesfully" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}
export const deleteList = async (req, res) => {
  try {
    const { listId } = req.params;
    await ListService.deleteList(listId);
    return res.status(200).json({ status: 204, message: `List with id ${listId} has been succesfully deleted` });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}
export const updateList = async (req, res) => {
  try {
    const listUpdated = await ListService.updateList(req.body);
    return res.status(200).json({ status: 200, data: listUpdated, message: `List with id ${req.body.listId} succesfully updated` });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}

