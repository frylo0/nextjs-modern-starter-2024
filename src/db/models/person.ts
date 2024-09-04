import mongoose, { Model, Schema, SchemaTypes } from 'mongoose';

export interface IPerson {
	name: string;
	phone?: string;
	email: string;
}

const personSchema = new Schema<IPerson>({
	name: {
		type: SchemaTypes.String,
		required: true,
	},
	phone: {
		type: SchemaTypes.String,
		required: false,
	},
	email: {
		type: SchemaTypes.String,
		required: true,
	},
});

export const Person: Model<IPerson> =
	mongoose.models.Person || mongoose.model<IPerson>('Person', personSchema, 'persons');
