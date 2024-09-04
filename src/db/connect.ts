import mongoose from 'mongoose';

import { MONGODB_DB_NAME, MONGODB_URI } from '@/constants/env';

const status = { connected: false };

export async function dbConnect() {
	if (status.connected) return;

	const db = await mongoose.connect(MONGODB_URI, { dbName: MONGODB_DB_NAME });
	status.connected = true;

	return db;
}
