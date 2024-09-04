// This file will be executed automatically on docker mongo init.
// Env vars are taken from `.env` file at the root of the project.

const fs = require('fs');

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const dbName = process.env.MONGO_DB_NAME;

db = db.getSiblingDB('admin');

db.createUser({
	user: username,
	pwd: password,
	roles: [{ role: 'dbOwner', db: dbName }],
});

db = db.getSiblingDB(dbName); // mongosh: use dbName

// Persons
db.createCollection('persons');
const personsData = fs.readFileSync('/docker-entrypoint-initdb.d/persons.json');
const personsJson = prepareMongoCompassData(JSON.parse(personsData));
db.persons.insertMany(personsJson);

/// Lib

function prepareMongoCompassData(data) {
	return data.map((doc) => {
		if (doc._id && doc._id.$oid) doc._id = new ObjectId(doc._id.$oid);
		return doc;
	});
}
