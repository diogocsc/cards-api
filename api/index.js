"use strict";

// Import the dependency.
import clientPromise from '../mongodb-client';


// Handler

export default async (req, res) => {

   // Get the MongoClient by calling await on the promise.

   // Because it is a promise, it will only resolve once.

   const client = await clientPromise;

   // Use the client to return the name of the connected database.

   res.status(200).json({ dbName: client.db().databaseName });

}
