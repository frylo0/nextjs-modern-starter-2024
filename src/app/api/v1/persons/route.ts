import { dbConnect } from '@/db/connect';
import { Person } from '@/db/models/person';

export const dynamic = 'force-dynamic';

export async function GET() {
	await dbConnect();

	try {
		const res = await Person.find({});
		return Response.json(res, { status: 200 });
	} catch (error) {
		return Response.json(error, { status: 502 });
	}
}
