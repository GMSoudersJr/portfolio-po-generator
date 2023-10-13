import { DB_URI, DB_NAME } from "$env/static/private";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
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
const usersCollection = db.collection('users');

export async function getPoForPdfGeneration(po_id: string) {
	const aggregate = [
		{
			'$match': {
				'_id': new ObjectId(po_id)
			}
		}, {
			'$lookup': {
				'from': 'payees',
				'localField': 'payee_id',
				'foreignField': '_id',
				'pipeline': [
					{
						'$project': {
							'_id': 0,
							'typeOfPayee': 0,
							'taxRate': 0,
							'reportingBudgetLine': 0,
							'topicDivision': 0,
							'currency': 0,
						}
					}
				],
				'as': 'payeeData'
			}
		}, {
			'$project': {
				'_id': 0,
				'payee_id': 0,
				'payeeName': 0
			}
		}
	];
	try {
		await client.connect();
		console.log("Successfully connected to the database to get a PO for PDF generation.");
		const poDocument = await poCollection.aggregate(aggregate).toArray();
		return poDocument[0];
	} catch (error) {
		console.log("There was an error getting a PO for PDF generation.", error)
	} finally {
		await client.close();
		console.log("Closed the database connection @getPoForPdfGeneration.")
	}
}

export async function getPosForOverview() {
	const aggregate = [
		{
			$project: {
				_id: {
					$toString: "$_id"
				},
				poNumber: 1,
				payeeName: 1,
				dueDate: 1,
				createdDate: 1,
				pnpLocation: 1,
				topicDivision: 1,
				reportingBudgetLine: 1,
				tax: 1,
				total: 1,
				paymentMethod: 1,
				productsOrServicesDescriptionsAndPrices: 1,
				requestedBy: 1,
				approvedBy: 1,
			}
		}
	];
	try {
		await client.connect();
		console.log("Successfully connected to the database to get POs for the overview.");
		const posForOverview = await poCollection
			.aggregate(aggregate)
			.toArray();
			return posForOverview;
	} catch (error) {
		console.log("There was an error getting POs for the overview from the database.", error)
	} finally {
		await client.close();
		console.log("Closed the database connection @getAllPos.")
	}
}

export async function addPoToTheDatabase(po: Po) {
	try {
		await client.connect();
		console.log("Successfully connected to the database to add a po.");
		const addedPo_id = (await poCollection.insertOne(po)).insertedId.toString();
		return addedPo_id;
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
		const registeredUser = (await usersCollection.insertOne(user)).acknowledged;
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
				publicKey: 1,
			}
		}
	];
	try {
		await client.connect();
		console.log("Connected to database to get a user.")
		const user = await usersCollection
			.aggregate(aggregate)
			.toArray();
		return user[0];
	} catch (error) {
		console.log("Error getting the user.", error);
	} finally {
		await client.close();
		console.log("Closed connection for getting a user.");
	}
};

export async function updateUser(user_id: string, publicKey: CryptoKey) {
	try {
		await client.connect();
		console.log("Connected to database to update a user.")
		await usersCollection
			.findOneAndUpdate(
				{
					_id: new ObjectId(user_id)
				}, {
					$set: {
						publicKey: publicKey
					}
				});
	} catch (error) {
		console.log("Error updating the user.", error);
	} finally {
		await client.close();
		console.log("Closed connection for updating a user.");
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
				topicDivision: 1,
				reportingBudgetLine: 1,
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
