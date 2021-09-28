"use strict";

// Import the dependency.
import Card from '../../models/card';
import clientPromise from '../../mongodb-client';

export default async (req, res) => {
    const client = await clientPromise;
    const collection = await client.db().collection('cards');
    const card = new Card({
      cardText: req.body.cardText
    })
    try {
      const c= await collection.insertOne(card);
      res.json(c);

  } catch(err){
      res.send('Error '+ err);
  }
 };