import {DB_URI, DB_NAME} from "$env/static/private";
import { MongoClient, ServerApiVersion } from "mongodb";
import type {Payee} from "./utils";

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

export async function getPayees() {
	const projection = {
		bankAccountNumber: 0,
		bankName: 0,
		nationalIdOrBusinessRegistrationNumber: 0,
		homeAddress: 0,
		bankAddress: 0,
		routingNumber: 0,
		swiftCode: 0
	};
	try {
		await client.connect();
		console.log("Connected to database to get payees.")
		return await payeeCollection
			.find(
				{},
				{ projection: projection }
			)
			.toArray();
	} catch (error) {
		console.log("Error getting the payees.", error);
	} finally {
		await client.close();
		console.log("Closed connection for getting payees.");
	}
}
