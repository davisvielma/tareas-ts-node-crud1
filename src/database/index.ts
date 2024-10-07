import { connect } from "mongoose";

import { MONGO_URI } from "./../config";

export const connectDB = async () => {
	await connect(MONGO_URI as string);
	console.log("Conectado a la MONGODB");
};
