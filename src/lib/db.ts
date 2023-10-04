import {DB_URI, DB_NAME} from "$env/static/private";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";
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
				taxRate: 1
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
