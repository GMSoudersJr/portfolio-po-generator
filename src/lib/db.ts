import { DB_URI, DB_NAME } from "$env/static/private";
import { MongoClient, ServerApiVersion } from "mongodb";
import type { Payee, User } from "./utils";
import type {Po} from "./classes";

const client = new MongoClient(DB_URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	}
});

const db = client.db(DB_NAME);
const payeeCollection = db.collection('payees');
const poCollection = db.collection('pos');
const users = db.collection('users');

export async function addPoToTheDatabase(po: Po) {
	try {
		await client.connect();
		console.log("Successfully connected to the database to add a po.");
		const addedPo = (await poCollection.insertOne(po)).acknowledged;
		return addedPo;
	} catch (error) {
		console.log("There was an error adding a po to the database.", error)
	} finally {
		await client.close();
	}
}

export async function registerNewUser(user: User) {
	try {
		await client.connect();
		console.log("Successfully connected to the database to register a user.");
		const registeredUser = (await users.insertOne(user)).acknowledged;
		return registeredUser;
	} catch (error) {
		console.error("There was an error registering a user for PO Generator", error)
	} finally {
		await client.close();
		console.log("Closed the database connection @registerUser.")
	}

}
export async function addPayee(payee: Payee) {
	try {
		await client.connect();
		console.log("Successfully connected to the database.")
		const result = await payeeCollection.insertOne(payee);
		return result.acknowledged
	} catch (error) {
		console.log("Error adding a payee", error)
	} finally {
		await client.close();
		console.log("Closed the payee database connection.")
	}
}

export async function findUser(username: string|undefined) {
	const aggregate = [
		{
			$match: {
				username: username
			}
		}, {
			$project: {
				_id: {
					$toString: "$_id"
				},
				firstName: 1,
				password: 1,
				username: 1,
			}
		}
	];
	try {
		await client.connect();
		console.log("Connected to database to get a user.")
		const user = await users
			.aggregate(aggregate)
			.toArray();
		return user[0];
	} catch (error) {
		console.log("Error getting the user.", error);
	} finally {
		await client.close();
		console.log("Closed connection for getting a user.");
	}

}

export async function getPayeesWithMinimalInfo() {
	const aggregate = [
		{
			$project: {
				_id: {
					$toString: "$_id"
				},
				shouldBeShown: {
					$literal: true
				},
				beneficiaryName: 1,
				typeOfPayee: 1,
				taxRate: 1,
				currency: 1,
			}
		}
	];
	try {
		await client.connect();
		console.log("Connected to database to get payees.")
		const payees = await payeeCollection
			.aggregate(aggregate)
			.toArray();
		return payees;
	} catch (error) {
		console.log("Error getting the payees.", error);
	} finally {
		await client.close();
		console.log("Closed connection for getting payees.");
	}
}
