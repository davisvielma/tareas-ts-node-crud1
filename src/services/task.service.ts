import { TaskModel } from "./../models";

const getAll = async () => {
	return await TaskModel.find();
};

const create = async (entity: object) => {
	return await TaskModel.create(entity);
};

const update = async (id: string, body: object) => {
	return await TaskModel.findByIdAndUpdate(id, body);
};

const deletee = async (id: string) => {
	return await TaskModel.findByIdAndDelete(id);
};

export const taskService = {
	getAll,
	create,
	update,
	deletee,
};
