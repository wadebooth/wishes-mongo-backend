import { MongoClient } from "mongodb";

export const getDb = async () => {
  const client = new MongoClient(process.env.MONGO_URL!);
  await client.connect();
  return client.db("zachs-db-v2");
};
