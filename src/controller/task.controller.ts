import { Response, Request } from "express";

import { taskService } from "./../services";

export const taskController = {
	getAllTask: async (req: Request, res: Response) => {
		try {
			const data = await taskService.getAll();
			res.json(data);
		} catch (error: any) {
			res.status(400).json({
				message: error.message,
			});
		}
	},
	create: async (req: Request, res: Response) => {
		try {
			const data = await taskService.create(req.body);
			res.json(data);
		} catch (error: any) {
			res.status(400).json({
				message: error.message,
			});
		}
	},
	update: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const data = await taskService.update(id, req.body);
			res.json(data);
		} catch (error: any) {
			res.status(400).json({
				message: error.message,
			});
		}
	},
	delete: async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const data = await taskService.deletee(id);
			res.json(data);
		} catch (error: any) {
			res.status(400).json({
				message: error.message,
			});
		}
	},
};
